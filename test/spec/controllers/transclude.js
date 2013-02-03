'use strict';

describe('Controller: TranscludeCtrl', function() {

  // load the controller's module
  beforeEach(module('writingDirectivesApp'));

  var TranscludeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    TranscludeCtrl = $controller('TranscludeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
