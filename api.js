async function fetching() {
    let result = []
    let data = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "c44a47562cmsh6ff0d107514bccfp146d00jsn876b11317ac5"
        }
    })
    data = await data.json()
    await data.response.forEach( d => {
        let ar = {
            negara:d.country,
            positif:d.cases.active,
            sembuh:d.cases.recovered,
            meninggal:d.deaths.total,
            total:d.cases.total,
            }
        result.push(ar)
        })
    return result
}

// async function getFlagId(country){
//     let flagid = await fetch(`https://restcountries.eu/rest/v2/name/${country.replace("-"," ")}?fullText=true`)
//     flagid = await flagid.json()
//     return flagid = {id:flagid[0].alpha2Code,flag:flagid[0].flag}
// }

export {fetching};