import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import router from './routes';

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
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
