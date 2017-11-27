import * as chai from 'chai'
import {testFunc} from '../src/index'

const should = chai.should()

describe('testFunc', () => {
  it('should be a function', () => {
    testFunc.should.be.a('function')
  })
})