const { ObjectId } = require('mongodb')
const { usersCollection } = require('../database')

async function getAllUsersInDB(){
        const result = await usersCollection.find().toArray()
        console.log('GET REQUEST: Find All Users')
        return result
}

async function insertIntoDB(user){
        const result = await usersCollection.insertOne(user)
        console.log('POST REQUEST: Create New User')
        return result
}

async function updateUserById(id, doc){
        const result = await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: doc })
        console.log('PUT REQUEST: Update A User')
        return result
 
}

async function deleteUserById(id){
        const result = await usersCollection.deleteOne({_id: new ObjectId(id)})
        console.log('DELETE REQUEST: Delete A User')
        return result

       
  
}

async function findAUserByUsername(username){
        const result = await usersCollection.findOne({username:`${username}`})
        return result
}

module.exports = {
    getAllUsersInDB,
    insertIntoDB,
    updateUserById,
    deleteUserById,
    findAUserByUsername
}