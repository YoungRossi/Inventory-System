const express = require('express')
const router = express.Router()

router.post('/login', (req,res)=>{
    req.session.visited = true
    console.log(req.session)
    console.log(req.session.id)
    const{username}=req.body
    res.cookie('Username', `${username}`)
    res.send(`${username} Signed In Successfully`).status(200)
})

module.exports = router