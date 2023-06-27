const fs = require('fs');
const UserModel = require('../models/User.js');

async function handleUpload(req, res) {
    const chunks = []

    req.on('data', chunk => {
        chunks.push(chunk)
    })

    req.on('end', () => {
        const singleBuffer = Buffer.concat(chunks)

        UserModel.findOneAndUpdate({name: req.headers.user}, {$push: {
            files: {
                name: req.headers.name,
                file: singleBuffer
            }
        }})
        .then(() => {
            console.log("updated successfully");
        })

        res.status(200).json({status: "Done"})
    })
}

function handleDownload(req, res) {
    const readStream = fs.createReadStream('./images/test.png')
    
    const chunks = []
    
    readStream.on('data', chunk => {
        chunks.push(chunk)
    })

    readStream.on('end', () => {
        const singleBuffer = Buffer.concat(chunks)
        
        const base64 = singleBuffer.toString('base64')

        const html = `<img src='data:/image/jpeg;base64,${base64}' />`

        res.send(html)
    })
}

function handleSeeAll(req, res) {
    fs.readdir('./images', async (err, files) => {
        if(files.length == 0) res.send("No Files")
        else {
            let images = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    div {
                        display: grid;
                        grid-template: repeat(4, 300px) / repeat(3, 300px);
                        justify-content: center;
                        gap: 20px;
                        margin: 0 50px;
                    }
            
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
            
            
                </style>
            </head>
            <body>
                <div>
            `
    
            const arrayOfImages = await Promise.all(files.map(async file => {
                const buffer = await fs.promises.readFile(`./images/${file}`)
    
                const base64 = buffer.toString('base64')
    
                const html = `<img src='data:/image/jpeg;base64,${base64}' />`
    
                images += html;
    
                return html
            }))
    
            res.send(images + `</div></body></html>`)
        }
    })
}

module.exports = {
    handleUpload,
    handleSeeAll,
    handleDownload
}