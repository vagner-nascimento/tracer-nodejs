module.exports = class UseCase {
    constructor({ tracer }) {
        this.tracer = tracer;
    }

    async execute() {
        const callName = 'UseCase.execute';

        console.log(`${callName} - trace id ${this.tracer.getId()}`);
        
        const sleepTime = this._getSleepTime();
        
        console.log(`${callName} - sleeping ${sleepTime} ms`);

        await this._sleep(sleepTime);

        console.log(`${callName} - trace id after sleep ${sleepTime} ms ${this.tracer.getId()}`);
    }

    _sleep(sleepTime) {
        return new Promise((resolve) => setTimeout(resolve, sleepTime));
    }

    _getSleepTime() {
        const max = 5;
        const min = 1;
        const time = Math.floor(Math.random() * (max - min)) + min;
        
        return time * 1000;
    }
}