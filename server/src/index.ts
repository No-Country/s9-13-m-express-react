import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import colors from '@colors/colors';

import router from './routes';
import dbConnect from './config/database';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swaggerSpec';
import { config } from './config/config';




class Server {
  app: Application;
  port: number = Number(process.env.PORT) || 3001;
  corsOptions = {}

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.corsOptions = {
      origin: config.FRONTEND_URL_BASE,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
      credentials: true,
      preflightContinue: true
  };
  }

  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors(this.corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.app.use('/api/v1', router).use('/api/v1-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  start(): void {
    this.app
      .listen(this.port, () => {
        console.log(colors.bgGreen.black(`Server Running on Port ${this.port}`));
      })
      .on('error', (error) => {
        console.log(colors.bgRed.black(`Error Starting Server -- [${error}]`));
      });
  }
}

const server = new Server();
server.start();
dbConnect();
