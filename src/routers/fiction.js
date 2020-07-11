const router = require('koa-router')()
const fictionCtrl = require('../controllers/FictionController')

const routers = router
  .post('/fictions', fictionCtrl.create)
  .get('/fictions/:id', fictionCtrl.show)
  .get('/fictions', fictionCtrl.list)
  
module.exports = routers



