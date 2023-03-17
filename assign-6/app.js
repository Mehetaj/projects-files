const loadPhones =async () => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    // fetch(URL).then(res => res.json()).then(data => console.log(data))
    const res = await fetch(URL);
    const data = await res.json();
    displayPhones(data.data );
    console.log(data.data.tools);
}
const displayPhones= (phones) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // display 20 phones only
    // const showAll = document.getElementById('showAll');
    // if(dataLimit &&phones.length > 10) {
    //     phones = phones.slice(0,10);
        
    //     showAll.classList.remove('d-none')
    // } else{
    //     showAll.classList.add('d-none')
    // }
    // // No phone found
    // const noPhone = document.getElementById('no-found-message')
    // if (phones.length === 0) {
    //     noPhone.classList.remove('d-none')
    // } else{
    //     noPhone.classList.add('d-none')
    // }
    // display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.name}" class="card-img-top p-5" alt="Ipun">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDetails()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button> 
</button>
        </div>
      </div>
        `
        phoneContainer.appendChild(phoneDiv);
    })
  

// stop loader
toggleSpinner(false)

}
const preccessSearch = (dataLimit) => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}
// handle search btn clk
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader
    preccessSearch(10)
})
document.getElementById('search-field').addEventListener('keypress', function (e) {   
    if (e.key === 'Enter') {
        preccessSearch(10)
    }
})
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    } else{
        loaderSection.classList.add('d-none')
    }
}
document.getElementById('btn-show-all').addEventListener('click', function() {
    preccessSearch()
})
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url).then(res => res.json()).then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <p> Release Date : ${phone.releaseDate} </p>
    <p> Storage : ${phone.mainFeatures.storage} </p>
    `
}

loadPhones('iphone')