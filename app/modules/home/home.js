'use strict';
define([
    'angular',
    'angularRoute'
], function (angular) {
    angular.module('portfolio.home', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'modules/home/home.html',
                controller: 'HomeCtrl'
            });
        }])
        .controller('HomeCtrl', [function () {

        }]);
});
