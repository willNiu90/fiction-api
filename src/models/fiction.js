const mongoose = require('mongoose')
const { Schema } = mongoose

const fictionSchema = new Schema({
  name: { 
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  describeUrl: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  listUrl: {
    type: String,
    required: true,
  },
  list: {
    type: [{
      chapter: String,
      chapterUrl: String,
      content: String
    }],
    required: true,
  },
}, { 
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})
module.exports = mongoose.model('Fiction', fictionSchema)