const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
    type:{
        type:String,
        required: true
    },
    formFactor:{
        type:String,
        required: true
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
        required: true
    },
    memory:{
        type:String,
        required:true
    },
    storage:{
        type:String,
        required: true
    },
    os:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }

})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device