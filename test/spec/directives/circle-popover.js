'use strict';

describe('Directive: circlePopover', function () {

  // load the directive's module
  beforeEach(module('portfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<circle-popover></circle-popover>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the circlePopover directive');
  }));
});
