const errors = require('../src/utils/customErorrs')

function checkErrors(req, res) {

    if (req.error instanceof errors.BadToken){

        res.status(401).json({
            message: req.error.message
        })

    } else if(req.error instanceof errors.BadRequestError){

        res.status(400).json({
            message: req.error.message
        })

    } else if(req.error instanceof errors.Forbidden){

        res.status(403).json({
            message: req.error.message
        })

    } else if (req.error instanceof errors.NotFound){

        res.status(404).json({
            message: req.error.message
        })

    } else if (req.error){

        res.status(500).json()

    }
}

module.exports = checkErrors;