const { createContainer, asClass, asFunction, asValue, InjectionMode } = require('awilix');

const Tracer = require('./lib/tracer');
const Server = require('./interface/http/server');
const Router = require('./interface/http/router');

const container = createContainer();

container
.register({
    tracer: asClass(Tracer).scoped(),
    router: asFunction(Router),
    server: asClass(Server).singleton(),
    container: asValue(container)
})
.loadModules(
    [
        './app/*.js',
        './infra/*.js',
        './infra/**/*.js'
    ],
    {
        formatName: 'camelCase',
        resolverOptions: {
            injectionMode: InjectionMode.PROXY
        }
    }
)

module.exports = container;