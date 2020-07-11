class ResponseObj {
  constructor({ code = 200, result = null, msg = 'success'}) {
    this.code = code
    this.result = result
    this.msg = msg
  }
}

module.exports = ResponseObj