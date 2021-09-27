const mRole = require('../models/MRole')
const resp = require('../utils/responses')

async function createRole(req, res) {
    try {
        const value = req.body

        const user = new mRole({
            _id: value.id,
            name: value.name
        })
    
        const saveRole = await user.save()
        resp.makeResponsesOkData(res, saveRole, "RCreated")
    } catch (e) {
        resp.makeResponsesException(res,e)
    }
}

module.exports = {
    createRole
}