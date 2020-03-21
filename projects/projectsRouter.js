const express = require('express');
const db = require('../data/helpers/projectModel');
const {validateId, validateBody} = require('../validate/validaters');

const router = express.Router();

router.get('/:id', validateId, (req, res) =>{
    res.status(200).json({body: req.project})
})

router.post('/', validateBody, (req, res) =>{
    db.insert(req.body)
        .then(obj =>{
            res.status(200).json({body: obj})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "There was a problem adding the project to the database"})
        })
})

router.put('/:id', validateBody, validateId, (req, res) =>{
    db.update(req.params.id, req.body)
        .then(obj =>{
            res.status(200).json({body: obj})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "There was a problem editing the project in the database"})
        })
})

router.delete('/:id', validateId, (req, res) =>{
    db.remove(req.params.id)
        .then(obj =>{
            res.status(200).json({body: obj})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "There was a problem deleting the project in the database"})
        })
})

router.get('/:id/actions', validateId, (req, res) =>{
    db.getProjectActions(req.params.id)
        .then(obj =>{
            res.status(200).json({body: obj})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "There was a problem getting the projects actions in the database"})
        })
})

module.exports = router;