const express = require('express')
const { connectToDB } = require('./database')
const { Logger } = require('./middleware/Logger') 
const usersRouter = require('./routes/UsersRoute')


const app = express()
const port = 3000

app.use(express.json())
app.use(Logger)
app.use(usersRouter)


async function startServer() {

    await connectToDB()

    app.listen(port, () => {
        console.log("Server Running on Port 3000........")
    })

}

startServer()