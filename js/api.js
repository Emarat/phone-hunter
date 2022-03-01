const error = document.getElementById('error');
// access inputField & button  using arrow function
const inputField = () => {
    const userInput = document.getElementById('inputForm');
    const searchText = userInput.value;
    const Btn = document.getElementById('button-addon2');
    // console.log(searchText);
    // clear inputfield 
    userInput.value = '';
    /* empty input field search error validation */
    if (searchText == '') {
        error.innerText = 'Please Write a Valid Keyword';
    } else {
        error.innerText = '';
        // fetch api 
        const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(res => searchResult(res.data))
    }
}

const searchResult = (data) => {
    const searchResult = document.getElementById('search-result');
    // error-- no phone found
    if (data.length == 0) {
        error.innerText = 'No Phone Found';
    }
    searchResult.innerHTML = '';
    const Data = data.slice(0, 20);  /*  results can not show more than 20*/
    Data.forEach(singleData => {
        // console.log(singleData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
             <img src="${singleData.image}" class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${singleData.phone_name} </h5>
             <h6 class="card-title">${singleData.brand} </h6>
                
         </div>
        <div class="card-footer text-center">
        <button type="button" class="btn btn-outline-info">Details</button>
        </div>
    </div>        
        `;
        searchResult.appendChild(div);
    });
}

