import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new MotorcycleService();
  }
  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status,
      buyValue: this.request.body.buyValue,
      category: this.request.body.category,
      engineCapacity: this.request.body.engineCapacity,

    }; 
    const newMoto = await this.service.create(motorcycle);
    return this.response.status(201).json(newMoto);
  }

  public async update() { 
    if (!isValidObjectId(this.request.params.id)) {
      return this.response.status(422).json({ message: 'Invalid mongo id' });
    }
    const updateMoto = await this.service.update(this.request.params.id, this.request.body);
    if (!updateMoto) {
      return this.response.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.response.status(200).json(updateMoto);
  }

  public async getAll() {
    const motorcycles = await this.service.getAllMotorcycles();
    return this.response.status(200).json(motorcycles);
  }

  public async getMotorcycleById() {
    if (!isValidObjectId(this.request.params.id)) {
      return this.response.status(422).json({ message: 'Invalid mongo id' });
    }
    const motorcycle = await this.service.update(this.request.params.id, this.request.body);
    if (!motorcycle) return this.response.status(404).json({ message: 'Motorcycle not found' });
    return this.response.status(200).json(motorcycle);
  }
}