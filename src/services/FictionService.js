const FictionModel = require('../models/fiction')

class FictionService {
  static async createFiction(data) {
    const res = await FictionModel.create(data)
    return res
  }
  static async getFictions() {
    const res = await FictionModel.find()
    return res
  }
  static async getFiction(_id) {
    const res = await FictionModel.findOne({_id}).lean()
    return res
  }
}

module.exports = FictionService