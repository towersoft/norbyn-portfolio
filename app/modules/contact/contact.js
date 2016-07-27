'use strict';

angular.module('portfolio.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'modules/contact/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', [function () {

    }]);