module.exports = class Contoller {
    constructor({ adapter, subscriber }) {
        this.queue = 'data1';
        this.adapter = adapter;
        this.subscriber = subscriber;
    }

    async readEvents() {
        async function handler(msg) {
            const callName = "Controller.readEvents";
            console.log(`${callName} - data without trace id`, msg.data);

            const { adapter } = msg.container.cradle;
            return adapter.process(msg.data);
        }

        return this.subscriber.subscribe(this.queue, handler);
    }
}