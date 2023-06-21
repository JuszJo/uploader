const express = require('express');
const app = express();

const multer = require('multer');

// get storage engine from multer
// and pass it an options object

// it takes a destination and a filename property

// destination is a string or function that specifies where the uploaded images will be stored.

// filename  is a function that determines the uploaded files' names.
// req, file, and a callback (cb).
// req is the Express Request object,
// file is an object containing information about the processed file,
//  cb is a callback that determines the uploaded files' names.
// The callback function takes error and filename as arguments.

const diskStorageOptions = {
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
}

const storageEngine = multer.diskStorage(diskStorageOptions)

// initialize multer
const upload = multer({
    storage: storageEngine
})

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome</h1>
    `)
})

app.listen(port, ()=>{
    console.log(`App is listening on port http://localhost:${port}`);
});