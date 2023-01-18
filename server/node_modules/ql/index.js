(function(){
  var __q, _module;
  __q = require('q');
  _module = function(){
    var iface;
    iface = __q;
    iface.and = function(promises){
      var res$, i$, len$, p;
      if (!Array.isArray(promises)) {
        res$ = [];
        for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
          p = arguments[i$];
          res$.push(p);
        }
        promises = res$;
      }
      return __q.all(promises);
    };
    iface.andSync = function(promises){
      var __finalAnd, res$, i$, len$, p, __completed;
      __finalAnd = __q.defer();
      if (!Array.isArray(promises)) {
        res$ = [];
        for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
          p = arguments[i$];
          res$.push(p);
        }
        promises = res$;
      }
      __completed = __q.allSettled(promises);
      __completed.then(function(it){
        var i$, len$, res;
        for (i$ = 0, len$ = it.length; i$ < len$; ++i$) {
          res = it[i$];
          if (res.state === "rejected") {
            __finalAnd.reject();
            return;
          }
        }
        return __finalAnd.resolve();
      });
      return __finalAnd.promise;
    };
    iface.not = function(it){
      var __not, pTrue, pFalse;
      __not = __q.defer();
      pTrue = function(it){
        return __not.reject(it);
      };
      pFalse = function(it){
        return __not.resolve(it);
      };
      it.then(pTrue, pFalse);
      return __not.promise;
    };
    iface.orSync = function(promises){
      var __finalOr, res$, i$, len$, p, __not_promises, __not_or;
      __finalOr = __q.defer();
      if (!Array.isArray(promises)) {
        res$ = [];
        for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
          p = arguments[i$];
          res$.push(p);
        }
        promises = res$;
      }
      res$ = [];
      for (i$ = 0, len$ = promises.length; i$ < len$; ++i$) {
        p = promises[i$];
        res$.push(iface.not(p));
      }
      __not_promises = res$;
      __not_or = __q.allSettled(__not_promises);
      __not_or = __not_or.then(function(it){
        var i$, len$, res;
        for (i$ = 0, len$ = it.length; i$ < len$; ++i$) {
          res = it[i$];
          if (res.state === "rejected") {
            __finalOr.resolve();
            return;
          }
        }
        return __finalOr.reject();
      });
      return __finalOr.promise;
    };
    iface.or = function(promises){
      var __finalOr, res$, i$, len$, p, __not_promises, __not_or, resolveIt, rejectIt;
      __finalOr = __q.defer();
      if (!Array.isArray(promises)) {
        res$ = [];
        for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
          p = arguments[i$];
          res$.push(p);
        }
        promises = res$;
      }
      res$ = [];
      for (i$ = 0, len$ = promises.length; i$ < len$; ++i$) {
        p = promises[i$];
        res$.push(iface.not(p));
      }
      __not_promises = res$;
      __not_or = __q.all(__not_promises);
      resolveIt = function(){
        return __finalOr.resolve();
      };
      rejectIt = function(){
        return __finalOr.reject();
      };
      __not_or = __not_or.then(rejectIt, resolveIt);
      return __finalOr.promise;
    };
    iface.tap = function(promise, cb){
      return promise.then(function(it){
        cb({
          state: "resolved",
          value: it
        });
        return it;
      }, function(it){
        cb({
          state: "rejected",
          value: it
        });
        throw it;
      });
    };
    iface.sRejectOnAllRejected = iface.orSync;
    iface.sResolveOnAllResolved = iface.andSync;
    iface.aResolveOnFirstResolved = iface.or;
    iface.aRejectOnFirstRejected = iface.and;
    iface.aRejectOnFirstResolved = function(){
      return iface.not(iface.aResolveOnFirstResolved.apply(this, arguments));
    };
    iface.aResolveOnFirstRejected = function(){
      return iface.not(iface.aRejectOnFirstRejected.apply(this, arguments));
    };
    return iface;
  };
  module.exports = _module();
}).call(this);
