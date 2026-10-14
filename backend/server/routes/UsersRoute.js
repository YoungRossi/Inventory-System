const { usersCollection } = require('../database')
const { insertIntoDB, updateUserById, deleteUserById, getAllUsersInDB } = require('../controller/UsersController')
const express = require('express')
const router = express.Router()


router.get("/", (req, res)=>{
    res.send("Hello World")
})

router.get('/users', async (req,res)=>{

    try{
        console.log(req.cookies.username)
        const result = await getAllUsersInDB()
        res.status(200).json(result)
    }catch(err){
        console.error(err)
        res.status(500).json({
            error: 'Unable to retrieve data'
        })
    }
})

router.post('/users', async (req,res)=>{
    const {firstname, lastname, role, email} = req.body

    const user = {
        firstname,
        lastname,
        role,
        email
    }

    await insertIntoDB(user)
    res.status(201).send("User Inserted Sucessfully")
})

router.put('/users/:id', async (req, res)=>{
    const id = req.params.id
    const {firstname,lastname,role,email} = req.body
    const updatedUserData={
        firstname,
        lastname,
        role,
        email
    }

    await updateUserById(id, updatedUserData)
    res.status(200).send("User Updated Sucessfully")
})

router.delete('/users/:id', async (req, res)=>{
    const id = req.params.id
    await deleteUserById(id)

    res.status(200).send('User Deleted Successfully')
})

module.exports = router