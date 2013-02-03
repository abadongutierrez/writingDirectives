'use strict';

writingDirectivesApp.directive('repeaterWithAttrs', function() {
    return {
        link: function postLink(scope, element, attrs) {    
            scope.$watch(attrs.repeaterWithAttrs, function(name) {
                element.text("Hello " + name + "!");
            });
        } 
    };
});
