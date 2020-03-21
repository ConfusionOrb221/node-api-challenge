function isEmptyObject(obj){
    return (Object.keys(obj) === 0)
}

function validateBody(req, res, next){
    if(req.body && !isEmptyObject(req.body)){
        if(req.body.name && req.body.description && (typeof req.body.completed === 'boolean')){
          next();
        } else {
          res.status(400).json({success: false, errorMessage: "Missing Required Fields"})
          res.end();
        }
      } else {
        res.status(400).json({success: false, errorMessage: "Missing Project Data"})
        res.end();
      }
}

module.exports = validateBody;