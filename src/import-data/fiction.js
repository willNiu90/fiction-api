const fs = require('fs')
const axios = require('axios')

fs.readFile('fiction.json',async function (err, data) {
  if (err) {
      return console.error(err);
  }
  let str = data.toString()
  let arr = JSON.parse(str)
  axios.post('http://127.0.0.1:3000/api/v1/fictions', arr)
  .then(res => console.log(res))
  .catch(e => {
    console.log('error', e)
  })
})