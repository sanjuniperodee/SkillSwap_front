fetch('http://185.146.1.93:81/api/jobs')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(JSON.parse(data)[0].fields.image)
    })

