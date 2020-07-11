const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')

const expect = chai.expect
const request = supertest(app.listen())

let _id = ''

describe('start create request', () => {
  const createItem = {
    "name": "小说名字1",
    "author": "作者1",
    "imgSrc": "首页小说图片1",
    "describeUrl":"17k小说描述地址1",
    "describe": "描述1",
    "listUrl": "17k章节地址1",
    "list": [
      {
        "chapter": "章节名1",
        "chapterUrl": "17k章节地址1",
        "content": "章节类容1"
      }
    ]
  }
  const createArr = [{
    "name": "小说名字11",
    "author": "作者11",
    "imgSrc": "首页小说图片11",
    "describeUrl":"17k小说描述地址11",
    "describe": "描述11",
    "listUrl": "17k章节地址11",
    "list": [
      {
        "chapter": "章节名11",
        "chapterUrl": "17k章节地址11",
        "content": "章节类容11"
      }
    ]
  },{
    "name": "小说名字12",
    "author": "作者12",
    "imgSrc": "首页小说图片12",
    "describeUrl":"17k小说描述地址12",
    "describe": "描述12",
    "listUrl": "17k章节地址12",
    "list": [
      {
        "chapter": "章节名12",
        "chapterUrl": "17k章节地址12",
        "content": "章节类容12"
      }
    ]
  }]
  it('create a fiction', done => {
    request
      .post(`/api/v1/fictions`)
      .send(createItem)
      .expect(200)
      .end((err, res) => {
        console.log('create a fiction', res.body)
        _id = res.body.result._id
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        done()
      })
  })
  it('create many fictions', done => {
    request
      .post(`/api/v1/fictions`)
      .send(createArr)
      .expect(200)
      .end((err, res) => {
        console.log('create a fiction', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('array')
        done()
      })
  })
})

describe('start get request', () => {
  it('get all fictions', done => {
    request
      .get('/api/v1/fictions')
      .expect(200)
      .end((err, res) => {
        console.log('get all fictions', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('array')
        done()
      })
  })
  it('get one fiction', done => {
    request
      .get(`/api/v1/fictions/${_id}`)
      .expect(200)
      .end((err, res) => {
        console.log('get one fiction', res.body)
        expect(res.body).to.be.an('object')
        expect(res.body.code).to.be.equal(200)
        expect(res.body.result).to.be.an('object')
        expect(res.body.result._id).to.be.equal(_id)
        done()
      })
  })
})
