const router = require('express').Router();
let Project = require('../models/project.model');


router.route('/').get((req,res) => {
    Project.find()
    .then(Projects => res.json(Projects).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').get((req,res) =>{
    Project.findOne({_id: req.params.id})
    .then(Projects => res.json(Projects).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/').post((req,res) => {
    const data = req.body;
    const newProject = new Project(data);
    newProject.save()
    .then(() => res.status(201).json(newProject))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').put((req,res) => {
    Project.updateOne({_id : req.params.id },{$set : req.body})
    .then(Projects => res.json(Projects).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').delete((req,res) => {
    Project.deleteOne({_id : req.params.id})
    .then(() =>{res.status(204)})
    .catch(err => res.status(400).json('Error ' + err));
})

module.exports = router;