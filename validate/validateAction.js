const db = require('../data/helpers/projectModel.js');

function isEmptyObject(obj){
    return (Object.keys(obj) === 0)
}

function ValidateAction(req, res, next){
    if(req.body && !isEmptyObject(req.body)){
        if(!isNaN(req.body.project_id) && req.body.description && req.body.notes && (typeof req.body.completed === 'boolean')){
            if(req.body.description.length <= 128){
                db.get(req.body.project_id)
                    .then(obj =>{
                        if(obj){
                            next();
                        } else {
                            res.status(400).json({errorMessage: "Project id is not in database"})
                        }
                    })
                    .catch(err =>{
                        res.status(400).json({errorMessage: "Project id is not in database"})
                    })
            } else {
                res.status(400).json({errorMessage: "Description is too big"})
            }
        } else {
          res.status(400).json({success: false, errorMessage: "Missing Required Fields"})
          res.end();
        }
      } else {
        res.status(400).json({success: false, errorMessage: "Missing Action Data"})
        res.end();
      }
}

module.exports = ValidateAction;