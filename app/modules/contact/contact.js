'use strict';
define([
    'angular',
    'endpoint',
    'angularRoute'
], function (angular, endpoint) {
    angular.module('portfolio.contact', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/contact', {
                templateUrl: 'modules/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            });
        }])
        .controller('ContactCtrl', ['$http', function ($http) {
            var contact = this;
            contact.contacts = [];
            $http.get(endpoint.contacts.url)
                .success(function (data) {
                    contact.contacts = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }]);
});
