fetch('http://127.0.0.1:8000/api/jobs')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(JSON.parse(data)[0].fields.image)
    })

