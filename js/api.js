// console.log('let connected');
// access inputField & button  using arrow function
inputField = () => {
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
        .then(data => console.log(data))
}

