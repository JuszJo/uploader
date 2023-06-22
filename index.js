const fs = require('fs');
const express = require('express');
const app = express();

// const multer = require('multer');

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

// const diskStorageOptions = {
//     destination: "./images",
//     filename: (req, file, cb) => {
//         cb(null, `${file.originalname}`)
//     }
// }

// const storageEngine = multer.diskStorage(diskStorageOptions)

// // initialize multer
// const upload = multer({
//     storage: storageEngine
// })

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(`C:/Users/Joshua/Desktop/Programming/HTMLCSSJAVASCRIPT/multer/index.html`)
})

app.post('/upload', (req, res) => {

    // const writeStream = fs.createWriteStream('image.jpg')

    // writeStream.on('finish', () => console.log("all done"))

    // let image_buffer = ""

    // req.on('data', async data => {
        // const image_buffer = Buffer.from(data)
        // writeStream.write(data)
        

        

        // console.log(image_buffer);
        
        // Buffer.fro
        // const response = await Promise.all(data)

        // console.log(response);
    
        // fs.writeFile()

        // console.log(data);

        // fs.w

        // fs.writeFile('image.jpg', data, 'base64', () => {
        //     console.log("Done");
        // })
    // })

    // console.log(req.files);

    

    // req.on('data', async (data) => {
    //     console.log(data);

    //     // req.pipe(fs.createWriteStream('image.png'))

    //     // const response = new Uint8Array(data)

    //     // console.log(response);

    //     // fs.writeFile('image.png', new Buffer.from(data, 'base64'), () => {
    //     //     console.log(`Data written successfully`);
    //     // })
    //     // fs.writeFile('image.png', response, () => {
    //     //     console.log(`Data written successfully`);
    //     // })

    //     // fs.wri
    //     // console.log(data);

    //     // const image = fs.createWriteStream(data)

    //     // fs.writeFile('image.jpg', image, (a, b) => {
    //         // console.log(a, b);
    //     // })

        
    // })

    // console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`App is listening on port http://localhost:${port}`);
});