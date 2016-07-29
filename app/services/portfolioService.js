'use strict';

angular.module('portfolio.PortfolioService', [])
    .service('PortfolioService', ['$http', 'config', function ($http, config) {
        this.loadPortfolio = function () {
            return $http.get(config.apiUrl + "/portfolio");
        };
    }]);