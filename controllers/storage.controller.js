const fs = require('fs');

function handleUpload (req, res) {
    const writableStream = fs.createWriteStream(`./images/${req.headers.name}`)

    const chunks = []

    req.on('data', chunk => {
        chunks.push(chunk)
    })

    req.on('end', () => {
        const singleBuffer = Buffer.concat(chunks)

        writableStream.write(singleBuffer)

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
            let images = `<div>`
    
            const arrayOfImages = await Promise.all(files.map(async file => {
                const buffer = await fs.promises.readFile(`./images/${file}`)
    
                const base64 = buffer.toString('base64')
    
                const html = `<img src='data:/image/jpeg;base64,${base64}' />`
    
                images += html;
    
                return html
            }))
    
            res.send(images + "</div>")
        }
    })
}

module.exports = {
    handleUpload,
    handleSeeAll,
    handleDownload
}