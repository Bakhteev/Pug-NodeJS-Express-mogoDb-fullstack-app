const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: Object,
    require: true,
  },
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project