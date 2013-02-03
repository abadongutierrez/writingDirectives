'use strict';

describe('Directive: demoGreet', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<demo-greet></demo-greet>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the demoGreet directive');
  }));
});
