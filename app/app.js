'use strict';

define([
    'angular',
    'modules/menu/menu',
    'modules/skills/skills',
    'modules/home/home',
    'modules/contact/contact',
    'modules/projects/projects',
    'components/version/version'
], function (angular) {
    // Declare app level module which depends on views, and components
    return angular.module('portfolio', [
        'ngRoute',
        'portfolio.menu',
        'portfolio.skills',
        'portfolio.home',
        'portfolio.contact',
        'portfolio.projects',
        'portfolio.version'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/home'});
        }]);
});
