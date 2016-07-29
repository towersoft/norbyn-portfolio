'use strict';

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
        project.hoverClass = '';
        $http.get("http://localhost:8001/projects")
            .success(function (data) {
                project.projects = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

        project.animation = function (id) {
            console.log(id);
        }
    }]);