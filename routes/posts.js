const router = require('express').Router();
let Post = require('../models/posts.model');


router.route('/').get((req,res) => {
    Post.find()
    .sort('-date')
    .then(posts => res.json(posts).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').get((req,res) =>{
    Post.findOne({_id: req.params.id})
    .then(posts => res.json(posts).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/').post((req,res) => {
    const data = req.body;
    const newPosts = new Post(data);
    newPosts.save()
    .then(() => res.status(201).json(newPosts))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').put((req,res) => {
    Post.updateOne({_id : req.params.id },{$set : req.body})
    .then(Posts => res.json(Posts).status(200))
    .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').delete((req,res) => {
    Post.deleteOne({_id : req.params.id})
    .then(() =>{res.status(204)})
    .catch(err => res.status(400).json('Error ' + err));
})

module.exports = router;