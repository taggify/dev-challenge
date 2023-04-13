let grpc = require("@grpc/grpc-js");
let protoLoader = require("@grpc/proto-loader");

const GRPC_PORT = process.env.GRPC_PORT || 5000;

let pkgDefinition = protoLoader.loadSync(
    "./src/grpc/protos/hello.proto",
    {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
        defaults: true,
        oneofs: true
    })

let helloProto = grpc.loadPackageDefinition(pkgDefinition);

const gRpcServer = new grpc.Server();

// Add services
gRpcServer.addService(helloProto.HelloService.service, {
    get: (_, callback) => {
        callback(null, { greet: "hello grpc" })
    }
})



module.exports = {
    gRpcServer
}
