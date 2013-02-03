'use strict';

writingDirectivesApp.directive('profile', function() {
  return {
    restrict: 'E',
    scope: {
        //email: '=' // Si queremos tomar el valor de la cadena como viene
        email: '@' // Si queremos evaluar y tomar el valor resultado de la evaluacion de una expresion {{}}
    },
    templateUrl: 'partials/profile.html'
  };
});
