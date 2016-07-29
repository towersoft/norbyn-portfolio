'use strict';

angular.module('portfolio.projects', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'modules/projects/projects.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'project'
        });
    }])
    .controller('ProjectsCtrl', ['$http', 'config', function ($http, config) {
        var project = this;
        project.projects = [];
        project.hoverClass = '';

        project.loadProjects = function () {
            $http.get(config.apiUrl + "/projects")
                .success(function (data) {
                    project.projects = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        project.animation = function (id) {
            console.log(id);
        }
    }]);