const axios = require('axios');
const client = axios.create({ baseURL: "http://localhost:3000" }); // 3000 = ms1

const calls = 2;
let promisses = [];

for(let i = 1; i <= calls; i++) {
    promisses.push(client.get("/"))
}

Promise
    .all(promisses)
    .then(res => res.forEach(r => console.log(`status: ${r.status} and data`, r.data)))