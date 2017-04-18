'use strict';

describe('Component: RekapComponent', function () {

  // load the controller's module
  beforeEach(module('sipalApp'));

  var RekapComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RekapComponent = $componentController('rekap', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
