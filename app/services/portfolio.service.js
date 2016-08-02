'use strict';

angular.module('portfolio.PortfolioService', [])
    .service('PortfolioService', PortfolioService);

PortfolioService.$inject = ['$http', 'config'];

function PortfolioService($http, config) {

    this.loadPortfolio = loadPortfolio;
    this.loadSkills = loadSkills;
    this.addSkill = addSkill;
    this.deleteSkill = deleteSkill;

    function loadPortfolio() {
        return $http.get(config.apiUrl + '/portfolio');
    }

    function loadSkills() {
        return $http.get(config.apiUrl + '/skills');
    }

    function addSkill(data) {
        return $http.post(config.apiUrl + '/skills', data);
    }

    function deleteSkill(id) {
        return $http.delete('http://localhost:8001/skills/' + id);
    }
}