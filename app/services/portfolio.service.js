'use strict';

angular.module('portfolio.PortfolioService', [])
    .service('PortfolioService', ['$http', 'config', PortfolioService]);

function PortfolioService($http, config) {
    this.loadPortfolio = function () {
        return $http.get(config.apiUrl + "/portfolio");
    };
}