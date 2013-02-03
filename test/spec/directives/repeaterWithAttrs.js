'use strict';

describe('Directive: repeaterWithAttrs', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<repeater-with-attrs></repeater-with-attrs>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the repeaterWithAttrs directive');
  }));
});
