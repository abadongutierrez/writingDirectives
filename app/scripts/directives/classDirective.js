'use strict';

writingDirectivesApp.directive('classDirective', function() {
  return {
    restrict: 'C',
    link: function postLink(scope, element, attrs) {
      element.text('this is the classDirective directive');
    }
  };
});
