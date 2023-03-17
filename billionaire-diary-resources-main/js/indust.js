const loadData = () => {
    const url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    fetch(url).then(res => res.json()).then(data => showBoroLox(data[0]))
}

const showBoroLox = (borolox) => {
    const boroloxContainer = document.getElementById('borolox-container');
    borolox.forEach(lok => {
        console.log(lok);
    })

    
}


loadData()
