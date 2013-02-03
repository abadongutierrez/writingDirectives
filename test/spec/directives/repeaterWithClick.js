'use strict';

describe('Directive: repeaterWithClick', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<repeater-with-click></repeater-with-click>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the repeaterWithClick directive');
  }));
});
