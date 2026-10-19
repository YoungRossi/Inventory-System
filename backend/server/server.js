const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { connectToDB, store } = require('./database') 
const usersRouter = require('./routes/UsersRoute')
const authRouter = require('./routes/AuthRoute')
const homeRouter = require('./routes/HomeRoute')
const { isSignedIn } = require('./middleware')
const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:"Ross-TheBoss",
    saveUninitialized: false,
    resave: false,
    store:store,
    cookie:{
       maxAge: 1000 * 60 *60
    }
}))

app.use(authRouter)
app.use(isSignedIn)
app.use(usersRouter, homeRouter)


async function startServer() {
    try{
        await connectToDB()

        app.listen(port, () => {
            console.log("Server Running on Port 3000........")
        })
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
}

startServer()