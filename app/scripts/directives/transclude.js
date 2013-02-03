'use strict';

writingDirectivesApp.directive('transclude', function() {
    return {
        templateUrl: 'partials/zippy.html',
        transclude: true,
        scope: {
            title: '@title'
        },
        restrict: 'E',
        link: function (scope, element, attrs) {
            scope.name = "Rafael";
            scope.leak = "LEAKING";
            scope.state = "opened";
            scope.toggle = function() {
                scope.state = scope.state == "opened" ? "closed" : "opened";
            } 
        }
    };
});
