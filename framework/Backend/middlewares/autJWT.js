const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.mdwares = {

    verifyToken: (req, res, next) => {
        try {
            const token = req.cookies["jwt"]
        
            if(!token) {
                return res.status(403).json({message: "No token privided"})
            }
        
            const cookie = req.cookies['jwt']
            const claims = jwt.verify(cookie,'secret')
            
            if(!claims) {
                return res.status(401).send({
                    status: 'error',
                    message: 'No autenticado'
                })
            }
            next();
        } catch (error) {
            return res.status(401).send({
                status: error,
                message: 'Unauthorized'
            })
        }
    },

    isAdmin: async (req, res, next) => {
        try {
            const cookie = req.cookies['jwt']
            const claims = jwt.verify(cookie,'secret')
            const user = await User.findOne({_id: claims._id})
    
            if(user.role == 'admin'){
                next();
                return;
            }
    
            return res.status(403).send({
                status: 'error',
                message: 'Requiere rol de administrador'
            })            
        } catch (error) {
            return res.status(400).send({
                status: 'error',
                message: 'Bad Request'
            })
        }
    }
}
