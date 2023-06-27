const express = require('express');
const app = express();
const handleRoutes = require('./routes/routes')
const mongoose = require('mongoose');
const mongo_config = require('./config/db.config');

app.use(express.static('./'))

const port = process.env.PORT || 3000;

mongoose.connect(mongo_config.uri)
.then(() => {
    handleRoutes(app)   
})

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`);
});