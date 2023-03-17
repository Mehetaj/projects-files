const loadQuote = () => {
    fetch('https://api.kanye.rest/').then(res => res.json()).then(data => displayCode(data))
}

const displayCode = data => {
    const blockQuote= document.getElementById('quote');
    blockQuote.innerHTML = data.quote;
}

loadQuote()