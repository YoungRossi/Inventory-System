
const User = require('../model/Users')

async function getAllUsersInDB(){
        const result = await User.find()
        console.log('GET REQUEST: Find All Users')
        return result
}

async function insertIntoDB(user){
        const result = await User.create(user)
        console.log('POST REQUEST: Create New User')
        return result
}

async function updateUserById(id, doc){
        const result = await User.findByIdAndUpdate(id, doc,{ new: true, runValidators: true } )
        console.log('PUT REQUEST: Update A User')
        return result
}

async function deleteUserById(id){
        const result = await User.findByIdAndDelete(id)
        console.log('DELETE REQUEST: Delete A User')
        return result
}

async function findAUserByUsername(username){
        const result = await User.findOne({username})
        return result
}

module.exports = {
    getAllUsersInDB,
    insertIntoDB,
    updateUserById,
    deleteUserById,
    findAUserByUsername
}