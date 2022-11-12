import express from 'express';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    // conectar mongoDB
    mongoose.connect(
      'mongodb+srv://anthony:123@devhouse.cahgrxr.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    this.middleWares();

    this.routes();
  }

  middleWares() {
    // limitar uso para dominios especificos
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
