'use strict';

angular.module('portfolio.skills')
    .controller('SkillsCtrl', SkillsCtrl);

SkillsCtrl.$inject = ['PortfolioService'];

function SkillsCtrl(PortfolioService) {
    var sk = this;
    sk.skills = [];
    sk.loadAll = loadAll;
    sk.addSkill = addSkill;

    function loadAll() {
        PortfolioService.loadSkills()
            .success(function (data) {
                sk.skills = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    function addSkill() {
        PortfolioService.addSkill(JSON.stringify({
            "description": sk.description,
            "level": sk.level
        }))
            .success(function (data) {
                console.log('post: ', data);
                sk.loadAll();
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    sk.deleteSkill = function (id) {
        PortfolioService.deleteSkill(id)
            .success(function (data) {
                console.log('delete: ', data);
                sk.loadAll();
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }
}