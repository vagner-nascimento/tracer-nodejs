const amqpCli = require('amqplib');

const queue = 'data1';
const sents = 5;
let data = {
    "id": 166,
    "name": "Regular Show",
    //"x-trace-id": "mySentTracrId" // uncomment this line to test sending trace id
}

amqpCli.connect('amqp://localhost:5672')
    .then((conn) => conn.createChannel())
    .then((ch) => ch.assertQueue(queue).then(() => ch))
    .then((ch) => {
        for(let i = 1; i <= sents; i++) {
            ch.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
        }
    })
    .catch((err) => {
        console.log('publish failed', err);
        process.exit(1);
    })