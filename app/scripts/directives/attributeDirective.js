'use strict';

writingDirectivesApp.directive('attributeDirective', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      element.text('this is the attributeDirective directive');
    }
  };
});
