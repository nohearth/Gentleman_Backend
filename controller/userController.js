

async function createUser(req, res) {
    const valUser = await MutationObserver.find({
        email: req.body.email
    })

    if (valUser) {
        return res.status(400).json({
            Ok: 0,
            Message: 'Error, email exists'
        })
    }
    try {
        
    } catch (e) {
        res.status(400).json({
            Ok: 0,
            Message: e
        })
    }
}