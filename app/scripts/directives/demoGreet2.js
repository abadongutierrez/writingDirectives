'use strict';

writingDirectivesApp.directive('demoGreetCompiling', function($parse) {
    return {
        compile: function compileFn(cElement, attrs) {
            console.log("compileFn[", cElement, attrs, "]");
            return function linkFn(scope, lElement, attrs) {
                console.log("linkinFn[", scope, lElement, attrs, cElement == lElement, "]");
                lElement.text("Hellow World Compiling");
            }            
        }
    };
});
