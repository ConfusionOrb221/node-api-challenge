const db = require('../data/helpers/actionModel.js');

function validateActionId(req, res, next){
    if(!isNaN(req.params.id)){
        db.get(req.params.id)
            .then(obj =>{
                if(obj){
                    req.action = obj;
                    next();
                } else {
                    res.status(400).json({errorMessage: "Given Id is not in database"})
                }   
            })
            .catch(err => {
                res.status(400).json({errorMessage: "Given Id is not in database"})
            })
    } else {
        res.status(400).json({errorMessage: "Enter a valid ID"})
    }
}

module.exports = validateActionId;