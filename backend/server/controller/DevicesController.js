const Device = require('../model/Device')

async function findAllDevices(){
    const result = Device.find()
    console.log('GET REQUEST: Find All Devices')
    return result
}

async function insertDeviceIntoDB(device){
    const result = Device.create(device)
    console.log('POST REQUEST: Create New Device')
    return result
}

module.exports = {
    findAllDevices,
    insertDeviceIntoDB
}