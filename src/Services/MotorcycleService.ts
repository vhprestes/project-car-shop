import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorCycle';

export default class MotorcycleService {
  private verifyMoto(moto: IMotorcycle | null): Motorcycle | null | undefined {
    if (moto) return new Motorcycle(moto);
    return null;
  }

  // constructor() {
  //   this.model = new MotorcycleODM();
  // }
  public async create(motorcycle: IMotorcycle) {
    const createMoto = await new MotorcycleODM().create(motorcycle);
    return this.verifyMoto(createMoto);
  }

  public async getAllMotorcycles() {
    const getMoto = await new MotorcycleODM().findAll();
    return getMoto.map((mot) => this.verifyMoto(mot));
  }

  public async getMotorcycleById(id: string) {
    const getMotoById = await new MotorcycleODM().findById(id);
    if (getMotoById) return this.verifyMoto(getMotoById);
  }
  
  public async update(id: string, motorcycle: IMotorcycle) {
    const motoUpdate = await new MotorcycleODM().update(id, { ...motorcycle });
    if (motoUpdate) return this.verifyMoto(motoUpdate);
  }
}
