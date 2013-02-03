'use strict';

writingDirectivesApp.directive('repeaterWithClickAndWithParams', function($parse) {
    return {
        link: function postLink(scope, element, attrs) {    
            scope.$watch(attrs.repeaterWithClickAndWithParams, function(name) {
                element.text("Hello " + name + "! <- click here to reset!");
            });

            element.bind('click', function() {
                console.log('click!');
                scope.$apply(function() {
                    $parse(attrs.repeaterWithClickAndWithParams).assign(scope, "reset!");
                })
            });
        } 
    };
});
