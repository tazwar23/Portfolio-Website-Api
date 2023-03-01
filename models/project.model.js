const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = mongoose.Schema({
    name: String,
    description: String,
    tools: [{icon : String, reference: String}], //This will store links to icons of the types of languages and tools used and the link to their docs page
    demo: String, //This will store the link of the place where the project is hosted
    github: String //This will store the link to the repository of the project

})

const Project = mongoose.model('Project',projectSchema)

module.exports = Project;