'use strict';

describe('Directive: mainToolbar', function () {

  // load the directive's module
  beforeEach(module('portfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-toolbar></main-toolbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mainToolbar directive');
  }));
});
