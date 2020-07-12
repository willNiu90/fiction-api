const FictionModel = require('../models/fiction')

class FictionService {
  static async createFiction(data) {
    console.log('进入创建')
    console.time('create')
    const res = await FictionModel.create(data)
    console.timeEnd('create')
    return res
  }
  static async getFictions() {
    console.log('进入service')
    console.time('start')
    const res = await FictionModel.find({}, null, {
      skip: 40,
      limit: 10,
      sort: {
        createdAt: 1,
      },
    })
    console.timeEnd('start')
    console.time('start11')
    const count = await FictionModel.estimatedDocumentCount({})
    console.timeEnd('start11')
    console.log(11111, res.length, count)
    return res
  }
  static async getFiction(_id) {
    const res = await FictionModel.findOne({_id}).lean()
    return res
  }
}

module.exports = FictionService