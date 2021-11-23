const amqpClient = require('amqplib');

module.exports = class Broker {
    constructor() {
        this.connection = null;
    }

    async getChannel() {
        await this._connect();
        
        return this.connection.createChannel();
    }

    async _connect() {
        if(this.connection) return;

        this.connection = await amqpClient.connect('amqp://localhost:5672');
        this._listenEvents();
    }

    _listenEvents() {
        this.connection.on('close', () => {
            console.log('amqp conn closed');
            this.connection = null;
        })

        this.connection.on('error', (err) => {
            console.error('amqp conn error', err);
            this.connection = null;
        })
    }
}