function Logger(req, res, next){
    console.log("Middleware Log")
    next()
}

module.exports = {Logger}