'use strict';

describe('Directive: demoGreet2', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<demo-greet2></demo-greet2>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the demoGreet2 directive');
  }));
});
