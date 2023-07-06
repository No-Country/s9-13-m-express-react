import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import colors from '@colors/colors';

import router from './routes';
import dbConnect from './config/database';

class Server {
  app: Application;
  port: number = Number(process.env.PORT) || 3001;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes(): void {
    this.app.use('/api/v1', router);
  }

  start(): void {
    this.app
      .listen(this.port, () => {
        console.log(colors.bgGreen.black(`Server Running on Port ${this.port}`));
      })
      .on('error', (error: any) => {
        console.log(colors.bgRed.black(`Error Starting Server -- [${error}]`));
      });
  }
}

const server = new Server();
server.start();
dbConnect();
