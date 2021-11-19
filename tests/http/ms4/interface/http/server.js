const newExpress = require('express');
const { scopePerRequest } = require('awilix-express');

module.exports = class Server {
    constructor({ container, router }) {
        this.express = newExpress();
        this.express.use(scopePerRequest(container));
        this.express.use(router);
        this.port = 3003;
    }

    async start() {
        return new Promise((resolve) => {
            this.express.listen(this.port, () => {
                console.log(`pId: ${process.pid} listening at port ${this.port}`);

                resolve();
            });
        })
    }
}