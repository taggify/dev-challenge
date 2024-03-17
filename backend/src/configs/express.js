const express = require('express');
const cors = require('cors');

const swaggerJSDoc = require('express-jsdoc-swagger');

module.exports = (app) => {
    let env = process.env.NODE_ENV || 'development';
    app.disable('x-powered-by');
    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));



    // Only run docs in development mode
    if (env === 'development') {
        //jsdocs static setup. Docs can be accecessed at http://localhost:3000/docs
        // JSDoc documentation https://jsdoc.app/index.html
        app.use(express.static(`${__dirname}/../../public`));

        // Swagger configuration
        // jsdoc-swagger docs (this) https://brikev.github.io/express-jsdoc-swagger-docs/#/
        // Swagger server can be accecessed at http://localhost:3000/api-docs
        const swaggerDefinition = {
            swagger: '2.0',
            info: {
                title: 'Taggify Backend Server',
                version: '1.0.0',
                description: 'This is a blank [Express](https://expressjs.com/) API backend server.',
                contact: {
                    email: 'dsp-team@taggify.net',
                    name: 'DSP Team',
                    url: 'https://taggify.net'
                },
            },
            host: `localhost:${process.env.LOCAL_PORT_API}`,
            basePath: '/api',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            servers: [
                {
                    url: `http://localhost:${process.env.LOCAL_PORT_API}`,
                    description: 'Development server',
                },
            ],
            tags: [ // Add tags to group endpoints
                {
                    name: 'Home',
                    description: 'Home endpoint',
                },,
                {
                    name: 'Weather',
                    description: 'Weather endpoint',
                },
            ],
            apiDocsPath: '/api-docs',
            baseDir: __dirname,
            filesPattern: [
                '../../src/routes/*.js',
                '../../src/models/*.js'
            ],
        };

        swaggerJSDoc(app)(swaggerDefinition);
    }
};
