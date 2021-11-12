const { Country, Activity , conn } = require('../../src/db.js');
const { expect } = require('chai');

xdescribe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
     
     
      it('debería funcionar cuando es un nombre válido', () => {
        Country.create({ name: 'Venezuela' });
      });
    });
    describe('id como lo pide el readme', () => {
      it('debería funcionar cuando es un id válido', () => {
        Country.create({ id: 'COL' });
      });
      it('debería funcionar cuando es un id válido', () => {
        Country.create({ id: 'ARG' });
      });
      it('debería funcionar cuando es un id válido', () => {
        Country.create({ id: 'BOL' });
      });
      it('debería funcionar cuando es un id válido', () => {
        Country.create({ id: 'CHI' });
      });
    })
    describe('countinents como lo pide el readme', () => {
      it('se supone que arroje true si el continente existe', () => {
        Country.create({  continents: 'North America' });
      });
      it('se supone que arroje true si el continente existe', () => {
        Country.create({  continents: 'Europe' });
      });
      it('se supone que arroje true si el continente existe', () => {
        Country.create({  continents: 'Africa' });
      });
      it('se supone que arroje true si el continente existe', () => {
        Country.create({  continents: 'Ocea' });
      });
    })
  });
});

xdescribe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators 2', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('todos los valores', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    })
  })
})