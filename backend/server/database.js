const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)


async function connectToDB() {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/InventorySystem',
            { serverSelectionTimeoutMS: 5000 }
        )

        console.log('Database Connected Successfully')
    } catch (err) {
        console.error('Database connection failed:', err.message)
        throw err
    }
}


const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017',
    databaseName:'InventorySystem',
    collection: 'sessions'
})

store.on('error', (err) => {
    console.error('Session store error:', err)
})

module.exports = {
    store,
    connectToDB,
}