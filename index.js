const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_config = require('./config/db.config');
const handleRoutes = require('./routes/routes')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(mongo_config.uri)
.then(() => {
    handleRoutes(app)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});