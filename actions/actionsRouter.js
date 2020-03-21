const express = require('express');
const db = require('../data/helpers/actionModel.js');
const {validateAction, validateActionId} = require('../validate/validaters.js');

const router = express.Router();

router.get('/:id', validateActionId, (req, res) =>{
    res.status(200).json({body: req.action})
})

router.post('/', validateAction, (req, res) =>{
    db.insert(req.body)
        .then(obj =>{
            res.status(200).json({body: req.body})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "Problem Adding Action"})
        })
})

router.put('/:id', validateAction, validateActionId, (req, res) => {
    db.update(req.params.id, req.body)
        .then(obj =>{
            res.status(200).json({body: req.body})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "Problem Editing Action"})
        })
})

router.delete('/:id', validateActionId, (req, res) =>{
    db.remove(req.params.id)
        .then(obj =>{
            res.status(200).json({body: req.body})
        })
        .catch(err =>{
            res.status(400).json({errorMessage: "Problem Deleting Action"})
        })
})


module.exports = router;