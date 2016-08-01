'use strict';

angular.module('portfolio.PortfolioService', [])
    .service('PortfolioService', PortfolioService);

PortfolioService.$inject = ['$http', 'config'];

function PortfolioService($http, config) {
    this.loadPortfolio = function () {
        return $http.get(config.apiUrl + "/portfolio");
    };
}