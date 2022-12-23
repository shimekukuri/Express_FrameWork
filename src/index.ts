import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Controller } from './controllers/Controller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/yolo', (req: Request, res: Response): void => {
  res.status(200).send(`
    <div>meep<div>
  `);
});

app.listen(3001, () => {
  console.log('listening on port whateer');
});

const controller1 = new Controller('/1');
const controller2 = new Controller('/2', [controller1]);
const controller3 = new Controller('/3', [controller2]);
const controller4 = new Controller('/4', [controller3]);

const c5 = new Controller('/5');
const c6 = new Controller('/6', [c5]);
const c7 = new Controller('/7');
const c8 = new Controller('/8', [c6, c7]);

c8.updateRoute();
