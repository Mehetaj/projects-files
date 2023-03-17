const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => showData(data)).catch(e => console.log(e))
}

const showData = (data) => {
    for(let singleData of data.slice(0,5)){
        // console.log(singleData);
        const container = document.getElementById('post-info')
        const div = document.createElement('div');
        div.innerHTML `
        <h1> ${singleData.title}</h1>
        `;

        container.appendChild(div)
    }
}