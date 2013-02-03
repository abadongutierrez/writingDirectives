'use strict';

writingDirectivesApp.directive('repeater', function() {
    return {
        link: function postLink(scope, element, attrs) {    
            scope.$watch('name', function(name) {
                element.text("Hello " + name + "!");
            });
        } 
    };
});
