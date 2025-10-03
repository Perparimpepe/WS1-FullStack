var axios = require('axios');

const promise = axios
    .get('http://www.omdbapi.com/?i=tt3896198&apikey=b163a364')
    .then( (response) => {
        const data = response.data;
        console.log(response.data);
});

console.log(promise);
console.log("Program ended");