angular
    .module('app')
    .controller('MainController', MainController);

function MainController($scope, DataService) {
    "use strict";

    $scope.page = {};

    activate();

    function activate() {

        DataService
            .getBrand()
            .then(function (res) {
                $scope.page = res.data;
            });
    }
    
}
