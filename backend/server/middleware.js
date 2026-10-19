 function isSignedIn(req, res, next){
    if(!req.session.userId){
        return res.status(401).send("You need to Sign In")
    }
    next()
}

module.exports = { isSignedIn }