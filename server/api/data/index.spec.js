'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var dataCtrlStub = {
  index: 'dataCtrl.index',
  show: 'dataCtrl.show',
  create: 'dataCtrl.create',
  update: 'dataCtrl.update',
  destroy: 'dataCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var dataIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './data.controller': dataCtrlStub
});

describe('Data API Router:', function() {

  it('should return an express router instance', function() {
    expect(dataIndex).to.equal(routerStub);
  });

  describe('GET /api/datas', function() {

    it('should route to data.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'dataCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/datas/:id', function() {

    it('should route to data.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'dataCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/datas', function() {

    it('should route to data.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'dataCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/datas/:id', function() {

    it('should route to data.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'dataCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/datas/:id', function() {

    it('should route to data.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'dataCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/datas/:id', function() {

    it('should route to data.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'dataCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
