const loadMeme = () => {
    const URL = "https://meme-api.com/gimme/25";
    fetch(URL).then(res => res.json()).then(data => showMeme(data.memes.slice(0,10  )))
}

const showMeme = (memes) => {
    // console.log(memes);

    memes.forEach((meme) =>{
        const memeContainer = document.getElementById('section');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
        <figure><img class="h-60 w-60" src="${meme.url}" alt=""></figure>
        `;

        memeContainer.appendChild(div);
    })
}

loadMeme()