'use strict';
define([
    'angular',
    'endpoint',
    'angularRoute'
], function (angular, endpoint) {
    angular.module('portfolio.projects', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/projects', {
                templateUrl: 'modules/projects/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'project'

            });
        }])
        .controller('ProjectsCtrl', ['$http', function ($http) {
            var project = this;
            project.projects = [];
            $http.get(endpoint.projects.url)
                .success(function (data) {
                    project.projects = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }]);
});
