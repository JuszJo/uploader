const querySearch = window.location.search

let user

if(querySearch == '') {
    user = prompt("enter your name")

    window.location = `/?name=${user}`
}
else {
    const searchParams = new URLSearchParams(querySearch)

    user = searchParams.get('name')
}

async function submitForm() {
    const files = document.querySelector('input').files

    const filesArray = Array.from(files)

    const arrayOfPromises = filesArray.map(async file => {
        const response = await fetch('/upload', {
            method: 'POST',
            headers: {
                'name': `${file.name}`,
                'user': `${user.toLowerCase()}`
            },
            body: file
        })

        const data = await response.json()

        return data
    })

    const data = await Promise.all(arrayOfPromises)

    if(data[0].status == "Done") window.location = `/?name=${user}`
}

function download() {
    
}