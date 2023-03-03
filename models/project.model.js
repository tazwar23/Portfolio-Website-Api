const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    name: String,
    description: String,
    icon:[String], //Will consist of image links of the tools I made the project with
    reference: [String], //This will consist of links to the documentation for the tools used above in icon
    demo: String, //This will store the link of the place where the project is hosted
    github: String //This will store the link to the repository of the project
})

const Project = mongoose.model('Project',projectSchema)

module.exports = Project;