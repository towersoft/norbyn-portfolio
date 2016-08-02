'use strict';

angular.module('portfolio.routes', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/skills', {
            templateUrl: 'modules/skills/skills.html',
            controller: 'SkillsCtrl',
            controllerAs: 'sk'
        }).when('/projects', {
            templateUrl: 'modules/projects/projects.html',
            controller: 'ProjectsCtrl',
            controllerAs: 'project'
        }).when('/contact', {
            templateUrl: 'modules/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        }).when('/home', {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        }).otherwise({redirectTo: '/home'});
    }]);