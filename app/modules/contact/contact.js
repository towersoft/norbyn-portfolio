'use strict';

angular.module('portfolio.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'modules/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        });
    }])

    .controller('ContactCtrl', ['$http', 'config', function ($http, config) {
        var contact = this;
        contact.contacts = [];
        contact.loadContact = function () {
            $http.get(config.apiUrl + "/contacts")
                .success(function (data) {
                    contact.contacts = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

    }]);