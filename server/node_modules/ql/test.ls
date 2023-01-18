require! 'should'
__q = require('q')

notifies-on-fail = (p, cb) ->
    p.then((-> cb(it)),(-> cb()))

notifies-on-success = (p, cb) ->
    p.then((-> cb()), (-> cb(it)))

create-resolved-promise = ->
    d = __q.defer()
    p = d.promise   
    d.resolve("cip")
    return p


create-rejected-promise = ->
    d = __q.defer()
    p = d.promise   
    d.reject("ciop")
    return p

Q = require('./index.js')

create-rejected-promise-tap = ->
    d = Q.defer()
    p = d.promise   
    d.reject("ciop")
    return p


describe 'QL — ', (empty) ->

  describe 'not', (empty) ->

    it 'not     — not R = J',  (done) ->
        p = create-resolved-promise()
        np = Q.not p
        np `notifies-on-fail` done

    it 'not     — not J = R',  (done) ->
        p = create-rejected-promise()
        np = Q.not p
        np `notifies-on-success` done

  describe 'orSync', (empty) ->

    it 'orSync  — orSync (R, -) = -' , (done) ->
        p1 = create-resolved-promise()
        p2 = __q.defer().promise

        Q.orSync(p1,p2).fin (-> done("error"))
        __q.delay(100).then done

    it 'orSync  — orSync (J, -) = -' , (done) ->
        p1 = create-rejected-promise()
        p2 = __q.defer().promise

        Q.orSync(p1,p2).fin (-> done("error"))
        __q.delay(100).then done

    it 'orSync  — orSync (R, R) = R' , (done) ->
        p1 = create-resolved-promise()
        p2 = create-resolved-promise()

        Q.orSync(p1,p2) `notifies-on-success` done

    it 'orSync  — orSync (J, J) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-rejected-promise()

        Q.orSync(p1,p2) `notifies-on-fail` done

    it 'orSync  — orSync (R, J) = R' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-resolved-promise()

        Q.orSync([p1,p2]) `notifies-on-success` done


  describe 'or', (empty) ->
    it 'or      — or     (R, -) = R' , (done) ->
        p1 = create-resolved-promise()
        p2 = __q.defer().promise

        Q.or(p1,p2) `notifies-on-success` done

    it 'or      — or     (J, -) = -' , (done) ->
        p1 = create-rejected-promise()
        p2 = __q.defer().promise

        Q.or(p1,p2).fin (-> done("error"))
        __q.delay(100).then done
   
    it 'or      — or     (R, R) = R' , (done) ->
        p1 = create-resolved-promise()
        p2 = create-resolved-promise()

        Q.or(p1,p2) `notifies-on-success` done

    it 'or      — or     (J, J) = J', (done) ->
        p1 = create-rejected-promise()
        p2 = create-rejected-promise()        
        Q.or(p1,p2) `notifies-on-fail` done

    it 'or      — or     (R, J) = R', (done) ->
        p1 = create-resolved-promise()
        p2 = create-resolved-promise()  
        Q.or(p1,p2) `notifies-on-success` done

  describe 'andSync', (empty) ->

    it 'andSync — andSync(R, -) = -' , (done) ->
        p1 = create-resolved-promise()
        p2 = __q.defer().promise

        Q.andSync(p1,p2).fin (-> done("error!"))
        __q.delay(100).then done

    it 'andSync — andSync(J, -) = -' , (done) ->
        p1 = create-rejected-promise()
        p2 = __q.defer().promise

        Q.andSync(p1,p2).fin (-> done("error!"))
        __q.delay(100).then done



    it 'andSync — andSync(R, R) = R' , (done) ->
        p1 = create-resolved-promise()
        p2 = create-resolved-promise()

        Q.andSync(p1,p2) `notifies-on-success` done

    it 'andSync — andSync(J, J) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-rejected-promise()

        Q.andSync(p1,p2) `notifies-on-fail` done

    it 'andSync — andSync(J, R) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-resolved-promise()

        Q.andSync(p1,p2) `notifies-on-fail` done


  describe 'and', (empty) ->




    it 'and     — and    (R, -) = -' , (done) ->
        p1 = create-resolved-promise()
        p2 = __q.defer().promise

        Q.and(p1,p2).fin (-> done("error!"))
        __q.delay(100).then done


    it 'and     — and    (J, -) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = __q.defer().promise

        Q.and(p1,p2) `notifies-on-fail` done

    it 'and     — and    (R, R) = R' , (done) ->
        p1 = create-resolved-promise()
        p2 = create-resolved-promise()

        Q.and(p1,p2) `notifies-on-success` done

    it 'and     — and    (J, J) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-rejected-promise()

        Q.and(p1,p2) `notifies-on-fail` done

    it 'and     — and    (R, J) = J' , (done) ->
        p1 = create-rejected-promise()
        p2 = create-resolved-promise()

        Q.and(p1,p2) `notifies-on-fail` done


describe 'and', (empty) ->
    it 'should tap transparently into a promise', (done) ->
        p1 = create-resolved-promise()
        mytap = (v) ->

        Q.tap(p1, mytap) `notifies-on-success` done

    it 'should tap transparently into a promise', (done) ->
        p1 = create-rejected-promise()
        mytap = (v) ->

        Q.tap(p1, mytap) `notifies-on-fail` done

    it 'should invoke tap', (done) ->
        p1 = create-rejected-promise()
        mytap = (v) ->
            should.exist(v.state)
            v.state.should.be.equal('rejected')
            done()

        Q.tap(p1, mytap) 

    it 'should invoke tap', (done) ->
        p1 = create-resolved-promise()
        mytap = (v) ->
            should.exist(v.state)
            v.state.should.be.equal('resolved')
            done()

        Q.tap(p1, mytap) 

