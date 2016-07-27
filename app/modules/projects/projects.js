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
        .controller('ProjectsCtrl', ['$http', function ($http) {
            var project = this;
            $http.get('http://localhost:3000/posts')
                .success(function (data) {
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }]);
});
