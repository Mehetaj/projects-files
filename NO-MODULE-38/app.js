const laodData = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
  fetch(url).then(res => res.json()).then(data => displaycockrails(data.drinks))
}

const displaycockrails = (drinks) => {
  const container = document.getElementById('cocrail-container');

  drinks.forEach(drink => {
    console.log(drink.strDrink);

    const divs = document.createElement('div');
    divs.classList.add('cols')
    divs.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${drink.strDrinkThumb}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${drink.strDrink}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
          <a href="#my-modal-2" class="btn">open modal</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(divs)
  })
}

function modal(){
  console.log('clicked');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.innerHTML =
  
  `
  <h2>"${drink.strDrink}"</h2>
  `
}

laodData()