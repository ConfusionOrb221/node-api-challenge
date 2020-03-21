const validateId = require('./validateId.js');
const validateBody = require('./validateChanges.js');
const validateActionId = require('./validateActionId.js');
const validateAction = require('./validateAction.js');


module.exports = {
    validateId: validateId,
    validateBody: validateBody,
    validateActionId: validateActionId,
    validateAction: validateAction
}