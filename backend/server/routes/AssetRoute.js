const express = require('express') 
const router = express.Router()
const { getAllAssets, insertAssetIntoDB } = require('../controller/AssetsController')

router.get('/assets'), async (req,res)=>{
    try{
       const response = await getAllAssets()
       res.status(200).send(response) 
    }catch(err){
        console.error(`Error Message: ${err}`)
        res.status(500).json({
            error: 'Unable to retrieve data'
        })
    }


}

router.post('/assets'), async (req,res)=>{
    try{
        const {
            assetTag, 
            serialNo, 
            manufacturer, 
            model, 
            type, 
            location, 
            department, 
            status, 
            condition, 
            purchaseDate,
            warrantyExpiry,
            assignedUser,
            computerDetails,
            printerDetails
        } = req.body

        if (!['computer', 'printer'].includes(type)) {
                return res.status(400).json({
                error: 'Invalid device type.'
            });
        }

         const assetData = {
            assetTag,
            serialNo,
            manufacturer,
            model,
            type,
            location,
            department,
            status,
            condition,
            purchaseDate,
            warrantyExpiry,
            assignedUser
        }

        if (type === 'Computer') {

            if (!computerDetails) {
                return res.status(400).json({
                    error: 'Computer details are required.'
                });
            }

            assetData.computerDetails = {
                formFactor: computerDetails.formFactor,
                hostname: computerDetails.hostname,
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
}