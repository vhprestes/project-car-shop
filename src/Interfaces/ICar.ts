// fix: id = string pq number é só quando faz calculo
import IVehicle from './IVehicle';

interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}

export default ICar;