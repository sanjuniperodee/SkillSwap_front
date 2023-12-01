fetch('https://hi-test.kz/api/jobs')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(JSON.parse(data)[0].fields.image)
    })

