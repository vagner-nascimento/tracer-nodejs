const container = require('./container');

const { amqpController } = container.cradle;

amqpController
    .readEvents()
    .catch(err => console.error(err));