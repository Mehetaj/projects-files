//  DO NOT show API KEY on your JS FILE

const API_KEY = `e33bcea5a3f7229fea727d1d68fd2b8c`

const loadTemperature = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(URL)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    serInnerTextById('temperature' , data.main.temp )
    serInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
}

const serInnerTextById = (id,text ) => {
    const temperature = document.getElementById(id);

    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function() {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    // set city
    document.getElementById('city').innerText = city
    
    loadTemperature(city)
})

loadTemperature('dhaka')