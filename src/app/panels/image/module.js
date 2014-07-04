define([
  'angular',
  'app',
  'lodash'
],
function (angular, app, _) {
  'use strict';

  var module = angular.module('kibana.panels.image', []);
  app.useModule(module);

  module.controller('image', function($scope, ejsResource) {

    $scope.panelMeta = {
      status  : "Stable",
      description : "Displays the product image"
    };

    // Set and populate defaults
    var _d = {
      style   : {},
      arrange : 'vertical',

      queries     : {
          mode        : 'all',
          ids         : []
      }
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
        $scope.search();
    };

    var ejs = ejsResource('http://192.168.59.103:9200');
    var oQuery = ejs.QueryStringQuery().defaultField('imageUrl');
    var client = ejs.Request().indices('product').types('1');

    $scope.search = function() {
        $scope.results = client.query(oQuery.query('*')).doSearch();
    };
  });
});