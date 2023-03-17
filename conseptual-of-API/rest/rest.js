const loadAllData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => showAllData(data))
}

const showAllData = (countries) => {
    countries.slice(0,50).forEach((country) => {
        console.log(country.flags);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

        
        `
    })
}


loadAllData()