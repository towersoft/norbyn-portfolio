'use strict';

angular.module('portfolio.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        });
    }])

    .controller('HomeCtrl', ['$http', function ($http) {
        var home = this;
        home.portfolio = {};
        $http.get("http://localhost:8001/portfolio")
            .success(function (data) {
                home.portfolio = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }]);