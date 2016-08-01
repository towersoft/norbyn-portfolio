'use strict';

angular.module('portfolio.home')
    .controller('HomeCtrl', ['PortfolioService', HomeCtrl]);

function HomeCtrl(PortfolioService) {
    var home = this;
    home.portfolio = {};
    home.loadResume = loadResume;

    function loadResume() {
        PortfolioService.loadPortfolio()
            .success(function (data) {
                home.portfolio = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}