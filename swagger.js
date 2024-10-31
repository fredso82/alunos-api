const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "API REST CRUD de alunos",
            version: "1.0.0",
            description:
                "Api desenvolvida como ativide da trilha Desenvolvimento Mobile (Node + React Native) - RESTIC36"
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./server.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
