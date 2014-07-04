define([
  'angular',
  'app',
  'lodash'
],
function (angular, app, _) {
  'use strict';

  var module = angular.module('kibana.panels.hello', []);
  app.useModule(module);

  module.controller('hello', function($scope) {

    $scope.panelMeta = {
      status  : "Stable",
      description : "Hello"
    };


    // Set and populate defaults
    var _d = {
      style   : {},
      arrange : 'vertical',
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
      // Place holder until I remove this
    };
  });

  module.filter('greet', function() {
    return function(name) {
        return "<img src=\"http://img.tesco.com/Groceries/pi/971/5449000601971/IDShot_225x225.jpg\">"
    };
  });
});