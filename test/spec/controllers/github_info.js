'use strict';

describe('Controller: GithubInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var GithubInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubInfoCtrl = $controller('GithubInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
