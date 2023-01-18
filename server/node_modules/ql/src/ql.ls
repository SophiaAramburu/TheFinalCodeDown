__q = require('q')

_module = ->

    iface = __q

#                        __
#       ____ _____  ____/ /
#      / __ `/ __ \/ __  / 
#     / /_/ / / / / /_/ /  
#     \__,_/_/ /_/\__,_/   
#                          
    iface.and = (promises) -> 

        if not Array.is-array(promises)
            promises := [p for p in &] 

        return __q.all promises

    iface.andSync = (promises) -> 

        __final-and = __q.defer()

        if not Array.is-array(promises)
            promises := [p for p in &] 

        __completed = __q.allSettled promises

        __completed.then -> 
            for res in it 
                if res.state == "rejected"
                    __final-and.reject()
                    return

            __final-and.resolve()

        return __final-and.promise


#                     __ 
#        ____  ____  / /_
#       / __ \/ __ \/ __/
#      / / / / /_/ / /_  
#     /_/ /_/\____/\__/  
#                        
    iface.not =  ->
        __not = __q.defer()

        p-true = ->
            __not.reject(it)

        p-false = ->
            __not.resolve(it)

        it.then p-true, p-false

        return __not.promise

#                  
#       ____  _____
#      / __ \/ ___/
#     / /_/ / /    
#     \____/_/     
#                  
    iface.orSync = (promises) ->
        __final-or = __q.defer()

        if not Array.is-array(promises)
            promises := [p for p in &] 

        __not_promises = [ iface.not(p) for p in promises ]

        __not_or = __q.allSettled __not_promises
        __not_or = __not_or.then ->

            for res in it 
                if res.state == "rejected"
                    __final-or.resolve()
                    return

            __final-or.reject()

        return __final-or.promise

    iface.or = (promises) ->

        __final-or = __q.defer()

        if not Array.is-array(promises)
            promises := [p for p in &] 

        __not_promises = [ iface.not(p) for p in promises ]

        __not_or = __q.all __not_promises

        resolve-it = -> __final-or.resolve()

        reject-it = -> __final-or.reject()

        __not_or = __not_or.then reject-it, resolve-it

        return __final-or.promise


    iface.tap = (promise, cb) ->
        return promise.then (-> cb(state: "resolved", value: it); return it) , (-> cb(state: "rejected", value: it); throw it)


    iface.sRejectOnAllRejected    = iface.orSync
    iface.sResolveOnAllResolved   = iface.andSync

    iface.aResolveOnFirstResolved = iface.or
    iface.aRejectOnFirstRejected  = iface.and

    iface.aRejectOnFirstResolved  = iface.aResolveOnFirstResolved >> iface.not
    iface.aResolveOnFirstRejected = iface.aRejectOnFirstRejected >> iface.not


    return iface
 
module.exports = _module()
