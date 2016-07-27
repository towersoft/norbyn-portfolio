'use strict';
define([
    'angular',
    'angularRoute'
], function (angular) {
    angular.module('portfolio.projects', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/projects', {
                templateUrl: 'modules/projects/projects.html',
                controller: 'ProjectsCtrl'
            });
        }])
        .controller('ProjectsCtrl', [function () {

        }]);
});
