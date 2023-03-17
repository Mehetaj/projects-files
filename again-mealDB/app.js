const loadData = () =>{
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=c`;
    fetch(URL).then(res => res.json()).then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    console.log(meals);
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card w-96 p-2 h-4/5 bg-base-100 shadow-xl">
                <figure><img class="w-96" src="${meal.strMealThumb}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${meal.strMeal}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                  <label onclick="openModal()" for="my-modal-3" id="modal-btn" class="btn">Details</label>
                  </div>
                </div>
              </div>
        `

        mealsContainer.appendChild(mealDiv)

        
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadData(searchText);
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url).then(res => res.json()).then(data => displayMealDetails (data.meals[0]))
}

const displayMealDetails = idMeal => {
  document.getElementById('')
}



  

loadData('rice')