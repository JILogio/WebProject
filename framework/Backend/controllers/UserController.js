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
    },

    delete: async (req, res) => {
        try {
            var userFound = req.params.id;
    
            const userDeleted = await User.findOneAndDelete({ _id: userFound }).exec();
    
            if (!userDeleted) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe'
                });
            }
    
            return res.send({
                status: 'success',
                userDeleted
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar'
            });
        }
    },

    getUsers: async (req,res) => {
        try {
            const users = await User.find({}).exec();
            if (users.length == 0) {
              return res.status(200).json({
                status: 'error',
                message: 'No hay usuarios'
              });
            }
        
            return res.send({
              status: 'success',
              users
            });
        } catch (err) {
            console.log(err)
            return res.status(200).send({
              status: 'error',
              message: 'Error al devolver datos'
            });
        }
    },

    search: async (req, res) => {
        try {
            const searchString = req.query.search;
    
            const user = await User.find({"$or": [
                {"_id": searchString},
                {"email": searchString}
            ]},).exec();
    
            if (!user || user.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la búsqueda'
                });
            }
    
            return res.send({
                status: 'success',
                user
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición'
            });
        }
    },

    update: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).exec();
    
            if (!user) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encuentra el usuario'
                });
            }

            const salt = await bcrypt.genSalt(10)
            const hasedPassword = await bcrypt.hash(req.body.password, salt)
    
            await User.findOneAndUpdate({ _id: req.params.id },{$set:{
                                            name: req.body.name || user.name,
                                            email: req.body.type || user.email,
                                            role: req.body.price || user.role,
                                            password: hasedPassword || user.password
                                            }});
    
            return res.send({
                status: 'success',
                product: 'Usuario actualizado'
            });
        } catch (err) {
            console.log(err);
            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar'
            });
        }
    }
}

module.exports = userController;