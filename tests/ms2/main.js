const container = require('./container');

const { server } = container.cradle;

server
    .start()
    .catch(err => console.error(err));