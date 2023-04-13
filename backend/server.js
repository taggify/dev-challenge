const { app } = require('./app');
let grpc = require("@grpc/grpc-js");
const PORT = process.env.PORT || 3000;
const GRPC_PORT = process.env.GRPC_PORT || 5000;
const DEBUG_PORT = process.env.DEBUG_PORT || 9229;

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
                console.log(`You can access through http://localhost:${process.env.LOCAL_PORT_API}`);
                console.log('');
                console.log(`🔌 gRPC SERVER running on port ${GRPC_PORT}`);
                console.log(`You can access through http://localhost:${process.env.LOCAL_GRPC_PORT_API}`);
                console.log('');
                console.log('');
                console.log(`👾 DEBUGGER SERVER running on port ${DEBUG_PORT}`);
                console.log(`You can access through http://localhost:${process.env.LOCAL_DEBUG_PORT}`);
                console.log('======================================================================');
                console.log('');
            });
        })
}

serverStart();
