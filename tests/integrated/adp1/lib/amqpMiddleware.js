const { v4: newUuid4 } = require('uuid');

module.exports = async(msg) => {
    let traceId = msg.data['x-trace-id'];

    if(!traceId)
        traceId = newUuid4();

    const { tracer } = msg.container.cradle;
    tracer.setId(traceId);

    delete msg.data['x-trace-id'];

    await msg.next();
}