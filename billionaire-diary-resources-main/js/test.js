const datas = () => {
    const url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    fetch(url).then(res => res.json()).then(data => console.log(data[0].countryOfCitizenship))
}


datas()