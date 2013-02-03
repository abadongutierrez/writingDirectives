'use strict';

writingDirectivesApp.directive('repeaterWithClick', function() {
    return {
        link: function postLink(scope, element, attrs) {    
            scope.$watch(attrs.repeaterWithClick, function(name) {
                element.text("Hello " + name + "! <- click here to reset!");
            });

            element.bind('click', function() {
                console.log('click!', Error().stack);
                scope.$apply(function() {
                    scope.name = "reset!";
                })
            });
        } 
    };
});
