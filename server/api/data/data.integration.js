'use strict';

var app = require('../..');
import request from 'supertest';

var newData;

describe('Data API:', function() {

  describe('GET /api/datas', function() {
    var datas;

    beforeEach(function(done) {
      request(app)
        .get('/api/datas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          datas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(datas).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/datas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/datas')
        .send({
          name: 'New Data',
          info: 'This is the brand new data!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newData = res.body;
          done();
        });
    });

    it('should respond with the newly created data', function() {
      expect(newData.name).to.equal('New Data');
      expect(newData.info).to.equal('This is the brand new data!!!');
    });

  });

  describe('GET /api/datas/:id', function() {
    var data;

    beforeEach(function(done) {
      request(app)
        .get('/api/datas/' + newData._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          data = res.body;
          done();
        });
    });

    afterEach(function() {
      data = {};
    });

    it('should respond with the requested data', function() {
      expect(data.name).to.equal('New Data');
      expect(data.info).to.equal('This is the brand new data!!!');
    });

  });

  describe('PUT /api/datas/:id', function() {
    var updatedData;

    beforeEach(function(done) {
      request(app)
        .put('/api/datas/' + newData._id)
        .send({
          name: 'Updated Data',
          info: 'This is the updated data!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedData = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedData = {};
    });

    it('should respond with the updated data', function() {
      expect(updatedData.name).to.equal('Updated Data');
      expect(updatedData.info).to.equal('This is the updated data!!!');
    });

  });

  describe('DELETE /api/datas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/datas/' + newData._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when data does not exist', function(done) {
      request(app)
        .delete('/api/datas/' + newData._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
