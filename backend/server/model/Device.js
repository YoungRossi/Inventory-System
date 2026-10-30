const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    type:{
        type:String,
        required: true
    },
    formFactor:{
        type:String,
    },
    manufacturer:{
        type:String,
        required: true
    },
    model:{
        type:String,
        required: true
    },
    cpu:{
        type:String,

    },
    memory:{
        type:String,
    },
    storage:{
        type:String,
        
    },
    os:{
        type:String, 
    },
    toner:{
        type:String,

    },
    colour:{
        type:String
    },
    printTech:{
        type:String
    },
    functionality:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device