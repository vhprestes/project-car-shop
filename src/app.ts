import express from 'express';
import CarRouter from './routers/CarRouter';
import MotoCycleRouter from './routers/MotoCycleRouter';

const app = express();
app.use(express.json());
app.use(CarRouter);
app.use(MotoCycleRouter);

export default app;
