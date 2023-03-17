const loadMeals = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`;
    fetch(url).then(res => res.json()).then(data => showMeals(data.meals))
}

const showMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');


    meals.slice(0,8).forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
        <div class=" card mb-3" style="max-width: 640px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${meal.strMealThumb}" class="img-fluid w-full h-full rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button class="btn text-warning">View Details</button>
                  </div>
                        </div>
                </div>
              </div>
        `;
        mealsContainer.appendChild(mealDiv)
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-text').value;
    loadMeals(searchText)
}





loadMeals('rice')