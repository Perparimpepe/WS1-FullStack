var data = require ('./sample.json');

console.log(data);
data.push({
    name: "John",
    age:"52",
    company :"Laurea",
    address: "Ratatie 22"
});
console.log("After adding a new person:");
console.log(data);

data.pop();
console.log("After removing the last person:");
console.log(data);