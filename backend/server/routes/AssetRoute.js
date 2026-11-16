const express = require('express') 
const router = express.Router()
const { getAllAssets, insertAssetIntoDB } = require('../controller/AssetsController')

router.get('/assets', async (req,res)=>{
    try{
       const response = await getAllAssets()
       res.status(200).send(response) 
    }catch(err){
        console.error(`Error Message: ${err}`)
        res.status(500).json({
            error: 'Unable to retrieve data'
        })
    }


})

router.post('/assets', async (req,res)=>{
    try{
        const {
            assetTag, 
            computerName,
            arrivalDate,
            serialNo,
            type, 
            department, 
            status, 
            warrantyDate,
            assignedUser,
            macAddress,
            ip,
            institution,
            computerDetails,
            printerDetails
        } = req.body

        if (!['Computer', 'Printer'].includes(type)) {
                return res.status(400).json({
                error: 'Invalid device type.'
            });
        }

         const assetData = {
            assetTag, 
            computerName,
            arrivalDate,
            serialNo,
            type, 
            department, 
            status, 
            warrantyDate,
            assignedUser,
            macAddress,
            ip,
            institution,
        }

        if (type === 'Computer') {

            if (!computerDetails) {
                return res.status(400).json({
                    error: 'Computer details are required.'
                });
            }

            assetData.computerDetails = {
                formFactor: computerDetails.formFactor,
                computerName: computerDetails.computerName,
                model: computerDetails.model,
                manufacturer: computerDetails.manufacturer,
                processor: computerDetails.cpu,
                ram: computerDetails.memory,
                storage: computerDetails.storage,
                operatingSystem: computerDetails.os,
                ipAddress: computerDetails.ipAddress,
                macAddress: computerDetails.macAddress
            };

        } else if (type === 'Printer') {

            if (!printerDetails) {
                return res.status(400).json({
                    error: 'Printer details are required.'
                });
            }

            assetData.printerDetails = {
                functionality: printerDetails.functionality,
                manufacturer: printerDetails.manufacturer,
                model: printerDetails.model,
                tonerModel: printerDetails.toner,
                printColour: printerDetails.colour,
                ipAddress: printerDetails.ipAddress,
                macAddress: printerDetails.macAddress
            }
        }

        const response = await insertAssetIntoDB(assetData);

        return res.status(201).json({
            message: 'Asset successfully registered.',
            asset: response
        })


    }catch(err){
        console.error('Asset Registration Error:', err)
    }
})

module.exports= router