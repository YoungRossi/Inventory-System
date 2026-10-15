const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

async function connectToDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/InventorySystem',
            {
                serverSelectionTimeoutMS: 5000
            }
        )
        console.log("Database Connected Successfully")  
    }catch(err){
    console.error(`Database Disconnected: ${err.message}`)
    }
}

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017',
    databaseName:'InventorySystem',
    collection: 'sessions'
})

module.exports = {
    store,
    connectToDB,
}