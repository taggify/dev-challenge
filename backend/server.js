const { app } = require('./app');
let grpc = require("@grpc/grpc-js");

const PORT = process.env.PORT || 3000;
const GRPC_PORT = process.env.GRPC_PORT || 5000;
const DEBUG_PORT = process.env.DEBUG_PORT || 9229;

const weatherController = require('./src/controllers/weather.controller');

const db = require('./src/utils/prisma.server');
const { gRpcServer } = require('./src/grpc/grpc.server');

//Initialize prisma orm
db.init();

async function serverStart() {
    gRpcServer.bindAsync(`localhost:${GRPC_PORT}`,
        grpc.ServerCredentials.createInsecure(),
        (err) => {
            if (err) {
                console.error(err.message);
                return null;
            }

            gRpcServer.start();
            app.listen(PORT, () => {
                console.log('');
                console.log('======================================================================');
                console.log(`🚀 REST SERVER running on port ${PORT}`);
                console.log(`You can access through http://localhost:${process.env.LOCAL_PORT_BACKEND}`);
                console.log('');
                console.log(`🔌 gRPC SERVER running on port ${GRPC_PORT}`);
                console.log(`You can access through http://localhost:${process.env.LOCAL_PORT_GRPC_BACKEND}`);
                console.log('');
                console.log('');
                console.log(`👾 DEBUGGER SERVER running on port ${DEBUG_PORT}`);
                console.log(`You can access through http://localhost:${process.env.LOCAL_PORT_DEBUG_BACKEND}`);
                console.log('======================================================================');
                console.log('');
            });
        })
}

setInterval(async () => {
    console.log('Realizando solicitud a OpenWeather...');
    const city = 'Bolívar, Buenos Aires, Argentina';
    await weatherController.saveData({ body: { city } }, null);
    console.log('Solicitud completada.');
}, 10 * 60 * 1000);

serverStart();
