const loadAllData = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => showAllData(data))
};

const showAllData = (countries) => {
  // console.log(countries);
  countries.slice(0.5).forEach((country) => {


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-lg">
    
    </div>
    `
  })
}

loadAllData()
