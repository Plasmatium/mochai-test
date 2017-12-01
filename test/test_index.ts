import * as chai from 'chai'
const should = chai.should()

import {testFunc, mockFetch} from '../src/index'

describe('testFunc', () => {
  it('should be a function', () => {
    testFunc.should.be.a('function')
    let x = 1
    x.should.be.a('number')
    x.should.be.an('number')
  })
})

describe('mockFetch - done() mode', () => {
  describe('#this has 50% of chance failed', () => {
    it('should passed', (done) => {
      mockFetch(0.5)
      .then(val => done()) // don't use .then(done()), done() will execute immediatly
      .catch(done)
    })
  })  
})

describe('mockFetch - async mode', () => {
  describe('#this has 50% of chance failed', () => {
    it('should passed', async () => {
      await mockFetch(0.5)
    })
  })  
})

// this is for git: merge and conflict test
