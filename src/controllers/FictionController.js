const FictionService = require('../services/FictionService')
const ResponseObj = require('../utils/response')

class FictionControler {
  static async create(ctx) {
    // data is object or array
    const data = ctx.request.body
    const result = await FictionService.createFiction(data)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async list(ctx) {
    const result = await FictionService.getFictions()
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
  static async show(ctx) {
    const { id } = ctx.params
    const result = await FictionService.getFiction(id)
    const retObj = new ResponseObj({result})
    ctx.body = retObj
  }
}

module.exports = FictionControler