angular
    .module('app')
    .controller('ClassblogCtrl', ClassblogCtrl);

function ClassblogCtrl($scope, DataService) {
    "use strict";
    
    $scope.syndicates = {};
    
    activate();
    
    function activate() {
        
        DataService
            .getStaff()
            .then(function (res) {
                $scope.syndicates = res.data.syndicates;
            });
    }
    
}