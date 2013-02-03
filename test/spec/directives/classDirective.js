'use strict';

describe('Directive: classDirective', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<class-directive></class-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the classDirective directive');
  }));
});
