const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/register',async (req,res) =>{
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
        const {password, ...data} = result.toJSON()

        res.send(data)

    } catch(err) {
        return res.status(200).send({
            status: 'error',
            message: 'Faltan datos o inválido'
        });
    }

    
});

router.post('/login',async (req,res) =>{
    const user = await User.findOne({email: req.body.email})

    if(!user){
        return res.status(404).send({
            message: 'Usuario no encontrado'
        })

    }

    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.status(400).send({
            message: 'Crendeciales inválidas'
        })
    }

    const token = jwt.sign({_id: user.id},"secret")

    res.cookie("jwt",token,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    })

    res.send({
        status: 'success'
    })
}); 

router.get('/user',(req,res) =>{
    const cookie = req.cookies['jwt']

    res.send(cookie)
})

module.exports = router;