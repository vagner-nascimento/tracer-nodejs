const axios = require('axios');

/* // Test 5 calls without call other ms
const client = axios.create({ baseURL: "http://localhost:3002" }); // 3002 = ms3

let promisses = [];

for(let i = 1; i <= 5; i++) {
    promisses.push(client.get("/"))
}

Promise
    .all(promisses)
    .then(res => res.forEach(r => console.log(`status: ${r.status} and data`, r.data)))
*/

/* // Test single call that calls other MSs
const client = axios.create({ baseURL: "http://localhost:3000" }); // 3000 = ms1

client.get("/")
    .then(r => console.log(`status: ${r.status} and data`, r.data))
*/


// Test 2 calls that calls other MSs
const client = axios.create({ baseURL: "http://localhost:3000" }); // 3000 = ms1

let promisses = [];

for(let i = 1; i <= 2; i++) {
    promisses.push(client.get("/"))
}

Promise
    .all(promisses)
    .then(res => res.forEach(r => console.log(`status: ${r.status} and data`, r.data)))
