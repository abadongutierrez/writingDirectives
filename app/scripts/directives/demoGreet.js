'use strict';

writingDirectivesApp.directive('demoGreet', function($parse) {
  return function linkFn(scope, lElement, attrs) {
    console.log("linkinFn(", scope, lElement, attrs);
    lElement.text("Hellow World");
  }
});
