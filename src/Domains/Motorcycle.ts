import IMotorcycle from '../Interfaces/IMotorcycle';
// import Vehicle from './Vehicle';
// pq deu erro aqui? ta puxando ICar pq procurar saber <<<<<

export default class Motorcycle {
  private engineCapacity: number;
  private category: string;
  protected id: string | undefined;
  protected model: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  protected color: string;
  protected year: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle.status || false;
    this.buyValue = motorcycle.buyValue;
    this.engineCapacity = motorcycle.engineCapacity;
    this.category = motorcycle.category;
  }

  public getEngineCapacity() { return this.engineCapacity; }

  public setEngineCapacity(engineCapacity: number) { this.engineCapacity = engineCapacity; }

  public getcategory() { return this.category; }

  public setCategory(category: string) { this.category = category; }
}
