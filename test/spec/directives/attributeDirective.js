'use strict';

describe('Directive: attributeDirective', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<attribute-directive></attribute-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the attributeDirective directive');
  }));
});
