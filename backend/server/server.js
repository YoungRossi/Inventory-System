const express = require('express')
const cookieParser = require('cookie-parser')
const { connectToDB } = require('./database')
const { Logger } = require('./middleware/Logger') 
const usersRouter = require('./routes/UsersRoute')
const authRouter = require('./routes/AuthRoute')


const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())
app.use(Logger)
app.use(authRouter, usersRouter)


async function startServer() {

    await connectToDB()

    app.listen(port, () => {
        console.log("Server Running on Port 3000........")
    })

}

startServer()