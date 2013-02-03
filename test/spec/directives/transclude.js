'use strict';

describe('Directive: transclude', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<transclude></transclude>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the transclude directive');
  }));
});
