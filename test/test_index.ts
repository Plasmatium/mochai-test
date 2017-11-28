import * as chai from 'chai'
import {testFunc, mockFetch} from '../src/index'

const should = chai.should()

describe('testFunc', () => {
  it('should be a function', () => {
    testFunc.should.be.a('function')
    let x = 1
    x.should.be.a('number')
    x.should.be.an('number')
  })
})