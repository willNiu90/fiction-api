const fs = require('fs')
const axios = require('axios')

console.time('start')

fs.readFile('fiction.json',async function (err, data) {
  if (err) {
      return console.error(err);
  }
  console.timeEnd('start')
  console.time('start1')
  let str = data.toString()
  let arr = JSON.parse(str)
  axios.post('http://47.100.7.150:3000/api/v1/fictions', arr)
  .then(res => {
    console.timeEnd('start1')
    console.log('success')
  })
  .catch(e => {
    console.log('error', e)
  })
})