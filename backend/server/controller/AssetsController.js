const Asset = require('../model/Assets')

async function getAllAssets(){
    const result = Asset.find()
    console.log('GET REQUEST: Find All Assets')
    return result
}

async function insertAssetIntoDB(asset){
    const result = Device.create(asset)
    console.log('POST REQUEST: Create New Asset')
    return result
}

module.exports = {
    getAllAssets, 
    insertAssetIntoDB
}