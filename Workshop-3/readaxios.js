var axios = require('axios');

const promise = axios
    .get('https://www.omdbapi.com/?t=star+wars&apikey=thewdb')
    .then( (response) => {
        const data = response.data;
        console.log(response.data);
});

console.log(promise);
console.log("Program ended");