const loadApi = () => {

    //get search field value
    const searchInput = document.getElementById('search-field');

    const searchText = searchInput.value;

    // if value is nothing
    if(searchInput.value === ''){
        alert('Please Enter Correct Name');
    }
    else {

        //empty field
    searchInput.value = '';
    // get api
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks));
    }
}

// display function

const displayDrinks = drinks => {
    const displayResult = document.getElementById('display-result');

    displayResult.textContent = '';

    if(!drinks) {
        alert('No drinks Found');
    }

    else {
        // create Div and enter value
    const div = document.createElement('div');
    div.innerHTML = ` <div class="row justify-content-center mt-5">
    <div class="col-4">
        <div class="card">
            <img src="${drinks[0].strDrinkThumb}" class="card-img-top mx-auto">
            <div class="card-body text-center">
              <h5 class="card-title">Name : ${drinks[0].strDrink}</h5>
              <button onclick="loadDetail(${drinks[0].idDrink})" type="button" class="btn btn-primary text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Details
              </button>
            </div>
          </div>
    </div>
</div>
`;
// append div
    displayResult.appendChild(div);
    }
}

// load detail by id function

const loadDetail = (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    fetch(url)
    .then(res => res.json()).then(data => displayDetail(data.drinks))
}


// display details

const displayDetail = (drinks) => {

    const title = document.getElementById('exampleModalLabel');

    title.innerText = `${drinks[0].strDrink}`;

    const details = document.getElementById('modal-body');

    details.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <h3> Category : ${drinks[0].strCategory}</h3>
    <h4> Instruction :  </h4>
    <p> ${drinks[0].strInstructions} </p>
    `;

    details.appendChild(div);
}
