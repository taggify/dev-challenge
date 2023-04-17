# Taggify Test Backend

New Express 4.18 backend with sane defaults. Highlights:

- Propper directory structure.
- Automatic endpoints documentation powered by [Swagger](https://swagger.io/).
- Automatic functions documentation by [JSDoc](https://jsdoc.app/).
- Database access through [Prisma](https://www.prisma.io/) ORM.
- High performance RPC framework [gRPC](https://grpc.io/).
- Testing powered by [Jest](https://jestjs.io/).
- [Axios](https://axios-http.com/docs/intro) as HTTP client.
- Live reload server, Swagger and docs.


### Directory Structure

```
.
├── src
│   ├── configs
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── grpc
│       └── protos
└── test
    └── utils
```

#### src/configs
Configuration files for Express and/or other middlewares or database.

#### src/controllers
Controller are methods get the request from the routes and convert them to HTTP responses with the use of any middleware as necessary.
File name convention: `nameOfEndPoint.controller.js`
Sample: `weather.controller.js`

#### src/middlewares
Functions can modiffy the requests before sending to our business logic eg: Authentication, logging,

#### src/models
Database models. Currently we use only one file (schema.prisma) with dummy js files to document that schema. But it can contain any data definition required by the ORM.

#### src/routes
Single file for each logical set of routes.
File name convention: `nameOfEndPoint.route.js`
Sample: `screens.route.js`


#### src/services
The services directory will include all the business logic. It can have services that represent business objects and can run queries on the database. Depending on the need, even general services like a database can be placed here.
File name convention: `nameOfEndPoint.service.js`
Sample: `weather.service.js`

#### src/utils
This directory will have all the utilities and helpers needed for the application. It will also act as a place to put shared logic.

#### src/grpc
This directory will have all the utilities and protos to make gRPC work.

#### test
In this directory we'll mirror the src directory and place the tests corresponding to each file.
File name convention: `nameOfFile.test.js`
Sample: `functions.util.test.js`

### Links

The ports and URL corresponds if the server is running standalone. In a Docker environment
the URLs and ports will and should change.

- The API REST server runs at [http://localhost:9000/](http://localhost:9000/)
- The API gRPC server runs at [http://localhost:5000/](http://localhost:5000/)
- Swagger Documentation [http://localhost:9000/api-docs](http://localhost:9000/api-docs)
- Function Documentation [http://localhost:9000/docs/](http://localhost:9000/docs)
- The debugger runs at [http://localhost:9229/](http://localhost:9229/)

### Running test

`npm run test`
