import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private service: CarService;
  private request: Request;
  private response: Response;
  private next: NextFunction;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.service = new CarService();
    this.request = request;
    this.response = response;
    this.next = next;
  }

  public async create() {
    const car: ICar = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status,
      buyValue: this.request.body.buyValue,
      doorsQty: this.request.body.doorsQty,
      seatsQty: this.request.body.seatsQty,
    };
    const createNewCar = await this.service.create(car);
    return this.response.status(201).json(createNewCar);
  }

  public async update() {
    if (!isValidObjectId(this.request.params.id)) {
      return this.response.status(422).json({ message: 'Invalid mongo id' });
    }
    const updateCar = await this.service.update(this.request.params.id, this.request.body);
    if (!updateCar) {
      return this.response.status(404).json({ message: 'Car not found' });
    }
    return this.response.status(200).json(updateCar);
  }

  public async findAll() {
    const findAllCars = await this.service.findAll();
    return this.response.status(200).json(findAllCars);
  }

  public async findById() {
    if (!isValidObjectId(this.request.params.id)) {
      return this.response.status(422).json({ message: 'Invalid mongo id' });
    }
    const findByIdCar = await this.service.update(this.request.params.id, this.request.body);
    if (!findByIdCar) {
      return this.response.status(404).json({ message: 'Car not found' });
    }
    return this.response.status(200).json(findByIdCar);
  }
}