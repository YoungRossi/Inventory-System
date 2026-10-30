const {findAllDevices, insertDeviceIntoDB} = require("../controller/DevicesController")
const express = require('express')
const router = express.Router()


router.get('/devices', async (req, res)=>{
    try{
        const result = await findAllDevices()
        res.status(200).send(result)
    }catch(err){
       console.error(err)
        res.status(500).json({
            error: 'Unable to retrieve data'
        })
    }
})

router.post('/devices', async (req, res)=>{
    try{
    const {type, formFactor, manufacturer, model, cpu, memory, storage, os, printTech, functionality, colour, toner} = req.body
    
    const device = type === 'computer'
    ? 
    {type, formFactor, manufacturer, model, cpu, memory, storage, os}
    : 
    {type, manufacturer, model, printTech, functionality, colour, toner}

    await insertDeviceIntoDB(device)
    res.status(201).send("Device Created Successfully")
    }catch(err){
        res.status(401).send(`Error: Device Not Created ${err}`)
    }
})

module.exports = router