const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

var userController = {
    
    register: async (req,res) =>{
        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(req.body.password, salt)
    
        try {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: hasedPassword,
            })
    
            const result = await user.save()
            const {password,locationID, ...data} = result.toJSON()
    
            return res.send(data)
    
        } catch(err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos o inválido'
            });
        }
    },

    login: async (req,res) =>{
        const user = await User.findOne({email: req.body.email})
    
        if(!user){
            return res.status(404).send({
                status: 'error',
                message: 'Usuario no encontrado'
            })
    
        }
    
        if(!await bcrypt.compare(req.body.password, user.password)){
            return res.status(400).send({
                status: 'error',
                message: 'Crendeciales inválidas'
            })
        }
    
        const token = jwt.sign({_id: user.id},"secret")
    
        res.cookie("jwt",token,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })
    
        res.send({
            status: 'success',
            message: 'Usuario logeado'
        })
    },

    getUser: async (req,res) =>{
        try{
            const cookie = req.cookies['jwt']
    
            const claims = jwt.verify(cookie,'secret')
    
            if(!claims) {
                return res.status(401).send({
                    status: 'error',
                    message: 'No autenticado'
                })
            }
    
            const user = await User.findOne({_id: claims._id})
            const {password,locationID, ...data} = user.toJSON()
    
            return res.send(data)
        } catch (err){
            return res.status(401).send({
                status: 'error',
                message: 'No logeado'
            })
        } 
    },

    logout: (req,res) => {
        res.cookie('jwt','',{maxAge: 0})
    
        return res.send({
            status: 'success',
            message: 'Usuario cerró sesión'
        })
    }
}

module.exports = userController;