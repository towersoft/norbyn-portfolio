'use strict';

angular.module('portfolio.projects')
    .controller('ProjectsCtrl', ['$http', 'config', ProjectsCtrl]);

function ProjectsCtrl($http, config) {
    var project = this;
    project.projects = [];
    project.hoverClass = '';
    project.loadProjects = loadProjects;

    function loadProjects() {
        $http.get(config.apiUrl + "/projects")
            .success(function (data) {
                project.projects = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}