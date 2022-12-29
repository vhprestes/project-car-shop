import Mongoose from 'mongoose';
import * as sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleServices from '../../../src/Services/MotorcycleService';

describe('MotorcyclesServices', function () {
  const motorcycleServices = new MotorcycleServices();

  describe('find all', function () {
    beforeEach(sinon.restore);

    const allMoto = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];

    it('should return empty when theres no cars', async function () {
      sinon.stub(Mongoose.Model, 'find').resolves([]);
      const motorcycles = await motorcycleServices.getAllMotorcycles();
      expect(motorcycles).to.be.deep.equal([]);
    });
    it('should return all motorcycles', async function () {
      sinon.stub(Mongoose.Model, 'find').resolves(allMoto);
      const motorcycles = await motorcycleServices.getAllMotorcycles();
      expect(motorcycles).to.be.deep.equal(allMoto);
    });
  });

  describe('find by id', function () {
    // beforeEach(sinon.restore);

    const moto = {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    it('should return a motorcycle', async function () {
      sinon.stub(Mongoose.Model, 'findById').resolves(moto);
      const motorcycle = await motorcycleServices.getMotorcycleById(moto.id);
      expect(motorcycle).to.be.deep.equal(moto);
    });
  });
});