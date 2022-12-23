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

const controller1 = new Controller('/');
const controller2 = new Controller('/2', [controller1]);
const controller3 = new Controller('/3', [controller1, controller2]);
const controller4 = new Controller('/4', [controller3]);

controller4.updateRoute();
