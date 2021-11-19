const { Router: newRouter } = require('express');

const tracerHttpMiddleware = require('../../lib/httpMiddleware');

module.exports = () => {
    const router = newRouter();

    router
        .use(tracerHttpMiddleware)
        .get('/', (req, res) => {
            const { adapter, tracer } = req.container.cradle;

            adapter
                .process()
                .then(() => {
                    const traceId = tracer.getId();

                    res.status(200).json({ traceId });
                })
                .catch(err => {
                    console.error(err);

                    res.status(500);
                })
        });

    return router;
}