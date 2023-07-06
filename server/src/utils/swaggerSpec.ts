import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SSB API',
      description: 'Backend API for SSB App',
      version: '1.0.0',
    },
  },
  servers: [
    {
      url: 'http://localhost:3001',
    },
  ],
  apis: ['server/src/routes/*.ts'],
});
