'use strict';

describe('Directive: repeater', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<repeater></repeater>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the repeater directive');
  }));
});
