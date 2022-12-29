import CarODM from '../Models/Car';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private verifyCar(car: ICar | null): Car | null | undefined {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const newCar = await new CarODM().create(car);
    return this.verifyCar(newCar);
  }

  public async update(id: string, car: Partial<ICar>) {
    const update = await new CarODM().update(id, { ...car });
    if (update) return this.verifyCar(update);
  }

  public async findAll() {
    const findAll = await new CarODM().findAll();
    return findAll.map((car) => this.verifyCar(car));
  }

  public async findById(id: string) {
    const validation = await new CarODM().findById(id);
    if (validation) return this.verifyCar(validation);
  }
}