import { Model } from 'mongoose';
import * as sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
// import ICar from '../../../src/Interfaces/ICar';

describe('CarService', function () {
  const carServices = new CarService();

  describe('create', function () {
    it('should create a new car', async function () {
      const carCreated = {
        id: '1',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15,
        doorsQty: 4,
        seatsQty: 5,
      };
      const car = {
        id: '1',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15,
        doorsQty: 4,
        seatsQty: 5,
      };
      sinon.stub(Model, 'create').resolves(carCreated);
      const result = await carServices.create(car);
      expect(result).to.be.deep.equal(car);
    });
  });

  describe('find', function () {
    // afterEach(sinon.restore);
    // const carsArray = [
    //   {
    //     id: '634852326b35b59438fbea2f',
    //     model: 'Marea',
    //     year: 2002,
    //     color: 'Black',
    //     status: true,
    //     buyValue: 15.99,
    //     doorsQty: 4,
    //     seatsQty: 5,
    //   },
    //   {
    //     id: '634852326b35b59438fbea31',
    //     model: 'Tempra',
    //     year: 1995,
    //     color: 'Black',
    //     status: true,
    //     buyValue: 39,
    //     doorsQty: 2,
    //     seatsQty: 5,
    //   },
    // ];
    // it('should return all cars', async function () {
    //   sinon.stub(Model, 'find').resolves(carsArray);
    //   const result = await carServices.findAll();
    //   expect(result).to.be.equal(carsArray);
    // });
    it('should return empty when theres no cars', async function () {
      sinon.stub(Model, 'find').resolves([]);
      const result = await carServices.findAll();
      expect(result).to.be.deep.equal([]);
    });
  });

  // describe('findById', function () {
  //   afterEach(sinon.restore);
  //   const car: ICar = {
  //     model: 'Marea',
  //     year: 2002,
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.990,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   };
  //   it('should return a car', async function () {
  //     sinon.stub(Model, 'findById').resolves(car);
  //     const result = await carServices.findById('1');
  //     expect(result).to.be.deep.equal(car);
  //   });
  //   it('should return null when theres no car', async function () {
  //     sinon.stub(Model, 'findById').resolves(null);
  //     const result = await carServices.findById('1');
  //     expect(result).to.be.deep.equal(null);
  //   });
  // });

  // describe('update', function () {
  //   afterEach(sinon.restore);
  //   const car: ICar = {
  //     model: 'Marea',
  //     year: 2002,
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.990,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   };
  //   it('should update a car', async function () {
  //     sinon.stub(Model, 'findByIdAndUpdate').resolves(car);
  //     const result = await carServices.update('1', car);
  //     expect(result).to.be.deep.equal(car);
  //   });
  //   it('should return null when theres no car with such id', async function () {
  //     sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
  //     const result = await carServices.update('1', car);
  //     expect(result).to.be.deep.equal(null);
  //   });
  // });
});