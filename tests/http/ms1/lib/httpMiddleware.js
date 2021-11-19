const { v4: newUuid4 } = require('uuid');

module.exports = (req, res, next) => {
    let traceId = req.headers['x-trace-id'];

    if(!traceId)
        traceId = newUuid4();

    const { tracer } = req.container.cradle;
    tracer.setId(traceId);

    next();
}