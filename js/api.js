// console.log('let connected');
// access inputField & button  using arrow function
const inputField = () => {
    const userInput = document.getElementById('inputForm');
    const searchText = userInput.value;
    const Btn = document.getElementById('button-addon2');
    // console.log(searchText);
    userInput.value = '';
    // fetch api 
    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(res => searchResult(res.data))
}

const searchResult = (data) => {
    const searchResult = document.getElementById('search-result');
    data.forEach(singleData => {
        // console.log(singleData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
             <img src="${singleData.image}" class="card-img-top" alt="...">
         <div class="card-body">
             <h5 class="card-title">${singleData.phone_name} </h5>
             <h6 class="card-title">${singleData.brand} </h6>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show that equal
                height action.</p>
         </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>        
        `;
        searchResult.appendChild(div);
    });
}

