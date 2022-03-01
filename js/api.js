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
        console.log(singleData);
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
        <button onclick="loadDetails('${singleData.slug}')" type="button" class="btn btn-outline-info">Details</button>
        </div>
    </div>        
        `;
        searchResult.appendChild(div);
    });
}

/* details information display */
const loadDetails = (slug) => {
    // console.log(slug)
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data));
}

const displayDetails = (data) => {
    console.log(data);
    const cardDetails = document.getElementById('cardDetails');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card">
                <img class="card-img-top" src="${data.image}" alt="Card image cap">
                <div class="card-body">
                    <p><b>Model:</b> ${data.name}</p>
                    <p><b>Brand:</b> ${data.brand}</p>
                    <p><b>Release Date:</b> ${data.releaseDate}</p>
                    <h3 class = "text-center"> MainFeatures </h3>
                    <p><b>Storage:</b> ${data.mainFeatures.storage}</p>
                    <p><b>Display Size:</b> ${data.mainFeatures.displaySize}</p>
                    <p><b>ChipSet:</b> ${data.mainFeatures.chipSet}</p>
                    <p><b>Memory:</b> ${data.mainFeatures.memory}</p>
                    <p><b>Sensors:</b> ${data.mainFeatures.sensors}</p>
                    <h3 class = "text-center"> Others </h3>
                    <p><b>WLAN:</b> ${data.others.WLAN}</p>
                    <p><b>Bluetooth:</b> ${data.others.Bluetooth}</p>
                    <p><b>GPS:</b> ${data.others.GPS}</p>
                    <p><b>NFC:</b> ${data.others.NFC}</p>
                    <p><b>Radio:</b> ${data.others.Radio}</p>
                    <p><b>USB:</b> ${data.others.USB}</p>
                    
                </div>
            </div>
    `;
    cardDetails.appendChild(div);
}

