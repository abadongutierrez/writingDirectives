'use strict';

describe('Directive: elementDirective', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<element-directive></element-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the elementDirective directive');
  }));
});
