'use strict';

angular.module('portfolio.skills')
    .controller('SkillsCtrl', ['$http', 'config', SkillsCtrl]);

function SkillsCtrl($http, config) {
    var sk = this;
    sk.skills = [];
    sk.buttonName = "New skill";
    sk.source = "img/icons/add.png";
    sk.loadAll = loadAll;
    sk.addSkill = addSkill;

    function loadAll() {
        $http.get(config.apiUrl + '/skills')
            .success(function (data) {
                sk.skills = data;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    function addSkill() {
        $http.post('http://localhost:8001/skills', JSON.stringify({
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
        $http.delete('http://localhost:8001/skills/' + id)
            .success(function (data) {
                console.log('delete: ', data);
                sk.loadAll();
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }
}