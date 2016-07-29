'use strict';

angular.module('portfolio.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
    }])

    .controller('HomeCtrl', ['$http', 'config', function ($http, config) {
        var home = this;
        home.portfolio = {};
        home.loadResume = function () {
            $http.get(config.apiUrl + "/portfolio")
                .success(function (data) {
                    home.portfolio = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };
    }]);