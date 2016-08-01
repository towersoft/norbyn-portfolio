'use strict';

angular.module('portfolio.contact')
    .controller('ContactCtrl', ['$http', 'config', ContactCtrl]);

function ContactCtrl($http, config) {
    var contact = this;
    contact.contacts = [];
    contact.loadContact = loadContact;

    function loadContact() {
        $http.get(config.apiUrl + "/contacts")
            .success(function (data) {
                contact.contacts = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


}