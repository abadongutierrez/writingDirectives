'use strict';

var writingDirectivesApp = angular.module('writingDirectivesApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/transclude', {
        templateUrl: 'views/transclude.html',
        controller: 'TranscludeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
