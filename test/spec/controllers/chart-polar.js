'use strict';

describe('Controller: ChartPolarCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var ChartPolarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartPolarCtrl = $controller('ChartPolarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
