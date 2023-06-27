const { verifyCredentials, createUser } = require("../services/auth.service");

function sendLogin(req, res) {
    res.sendFile('C:/Users/Joshua/Desktop/Programming/HTMLCSSJAVASCRIPT/multer/public/pages/login.html')
}

async function handleLogin(req, res) {
    const username = req.body.username
    const password = req.body.password

    try {
        const value = await verifyCredentials(username, password)
    
        if(!value) res.redirect('/login')
        else {
            req.session.user = username

            res.redirect(`/?name=${username}`)
        }
    }
    catch(err) {
        if(err) throw err
    }
}

function sendSignup(req, res) {
    res.sendFile('C:/Users/Joshua/Desktop/Programming/HTMLCSSJAVASCRIPT/multer/public/pages/signup.html')
}

function handleSignup(req, res) {
    const username = req.body.username
    const password = req.body.password

    try {
        createUser(username, password)

        res.redirect('/login')
    }
    catch(err) {
        if(err) throw err
    }
}

module.exports = {
    sendLogin,
    handleLogin,
    sendSignup,
    handleSignup
}