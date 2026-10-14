const express = require('express')
const { findAUserByUsername } = require('../controller/UsersController')
const router = express.Router()

router.post('/login', async(req,res)=>{
    const{username, password}=req.body
    req.session.visited = true
    res.cookie('Username', `${username}`)
    try{
        const result = await findAUserByUsername(username)
        

         if (!result) {
            console.log("User Not Found")
            return res.status(401).send('Invalid username or password');
        }

        const dbPassword = result.password
        const fname = result.firstname
        const lname = result.lastname

        if (password === dbPassword) {
            req.session.visited = true;
            req.session.userId = result._id;

            res.cookie('Username', username);
            req.session.user = `${fname} ${lname}`

            return res.status(200).send(`${fname} Signed in successfully`);
        }
            
        return res.status(401).send('Invalid username or password');

    }catch(err){
        console.log(`Error: ${err.message}`)
    }
})

module.exports = router