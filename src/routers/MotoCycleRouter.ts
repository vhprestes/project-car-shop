import { Router } from 'express';
import MotoCycleController from '../Controllers/MotorCycleController';

const route = Router();

route.post('/motorcycles', (req, res, next) => new MotoCycleController(req, res, next).create());
route.put('/motorcycles/:id', (req, res, next) => new MotoCycleController(req, res, next).update());
route.get('/motorcycles', (req, res, next) => new MotoCycleController(req, res, next).getAll());

route.get('/motorcycles/:id', (req, res, next) =>
  new MotoCycleController(req, res, next).getMotorcycleById());

export default route;