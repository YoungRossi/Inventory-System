const { MongoClient} = require("mongodb") 
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const dbconn = new MongoClient("mongodb://localhost:27017", {
    serverSelectionTimeoutMS: 5000})

const db = dbconn.db("InventorySystem")

const usersCollection = db.collection("users")

async function connectToDB(){
    try{
        await dbconn.connect()
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
    usersCollection
}