'use strict';

describe('Directive: mdIcon2', function () {

  // load the directive's module
  beforeEach(module('portfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<md-icon2></md-icon2>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mdIcon2 directive');
  }));
});
