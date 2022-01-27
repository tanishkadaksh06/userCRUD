const express = require('express')
const router = express.Router()
const schema= require('../models/schema')

router.get('/' , async(req, res) => {
    try{
        const users= await schema.find()
        res.json(users)
        // console.log(user)
    } catch(err){
        res.send("Error" +err)
    }
})
router.get('/:email' , async(req, res) => {
    try{
        const p= await schema.findOne({email : req.params.email})
        res.json(p)
        // console.log(user)
    } catch(err){
        res.send("Error" +err)
    }
})
router.post('/', async(req, res) => {
    const user= new schema({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    })
    try{
        const a1 = await user.save()
        res.json(a1)
    } catch(err){
        res.send("Error" +err)
    }
})
router.patch('/:email', async(req, res) => {
    try{
        const user = await schema.findOne({email : req.params.email})
        user.username = req.body.username,
        user.password = req.body.password
        const a1 = await user.save()
        res.json(a1)
    } catch(err){
        res.send('Error' +err)
    }
})
router.delete('/:email', async(req, res) => {
    try{
        const d= await schema.deleteMany({email: req.params.email})
        res.json(d)
    } catch(err) {
        res.send('Error' + err)
    }
})


module.exports = router;