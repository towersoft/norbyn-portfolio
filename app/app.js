'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
    'ngRoute',
    'portfolio.home',
    'portfolio.projects',
    'portfolio.skills',
    'portfolio.contact',
    'portfolio.menu',
    'portfolio.version',
    'portfolio.button',
    'portfolio.config',
    'portfolio.PortfolioService'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
