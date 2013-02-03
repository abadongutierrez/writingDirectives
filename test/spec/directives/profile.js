'use strict';

describe('Directive: profile', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<profile></profile>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the profile directive');
  }));
});
