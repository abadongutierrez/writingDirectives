'use strict';

describe('Directive: repeaterWithClickAndWithParams', function() {
  beforeEach(module('writingDirectivesApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<repeater-with-click-and-with-params></repeater-with-click-and-with-params>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the repeaterWithClickAndWithParams directive');
  }));
});
