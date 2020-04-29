async function fetching() {
    let data = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "c44a47562cmsh6ff0d107514bccfp146d00jsn876b11317ac5"
        }
    })
    data = await data.json()
    data = await data.response.map( d => {
            return {
            negara:d.country,
            positif:d.cases.active,
            sembuh:d.cases.recovered,
            meninggal:d.deaths.total,
            total:d.cases.total,
            }
    })
    return data
}

export {fetching};