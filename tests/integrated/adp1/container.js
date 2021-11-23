const { createContainer, asClass, asFunction, asValue, InjectionMode } = require('awilix');

const Tracer = require('./lib/tracer');
const Subscriber = require('./infra/amqp/subscriber');
const Publisher = require('./infra/amqp/publisher');
const Broker = require('./infra/amqp/broker');
const AmqpController = require('./interface/amqp/controller');

const container = createContainer();

container
.register({
    broker: asClass(Broker).singleton(),
    subscriber: asClass(Subscriber),
    publisher: asClass(Publisher),
    tracer: asClass(Tracer).scoped(),
    amqpController: asClass(AmqpController),
    container: asValue(container)
})
.loadModules(
    [
        './app/*.js',
        './infra/repository/*.js',
        './infra/http/*.js'
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            injectionMode: InjectionMode.PROXY
        }
    }
)

module.exports = container;