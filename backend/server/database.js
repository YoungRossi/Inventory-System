const { MongoClient} = require("mongodb")

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

module.exports = {
    connectToDB,
    usersCollection
}