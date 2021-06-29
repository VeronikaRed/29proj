const verifyAdmin = (req, res, next) => {

    if(req.user.is_admin > 0){
        next();
        return
    }
    res.status(403).json({message: 'Access denied'})
}

module.exports = {
    verifyAdmin
}