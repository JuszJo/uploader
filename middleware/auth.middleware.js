function checkAuth(req, res, next) {
    if(req.session.user || req.path == '/login' || req.path == '/signup') {
        next();
    }
    else res.redirect("/login");
}

module.exports = checkAuth