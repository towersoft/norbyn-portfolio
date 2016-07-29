'use strict';

angular.module('portfolio.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
    }])

    .controller('HomeCtrl', ['$http', 'config', 'PortfolioService', function ($http, config, PortfolioService) {
        var home = this;
        home.portfolio = {};
        home.loadResume = function () {
            PortfolioService.loadPortfolio()
                .success(function (data) {
                    home.portfolio = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };
    }]);