angular
    .module('app')
    .controller('StafflistCtrl', StafflistCtrl);

function StafflistCtrl($scope, DataService) {
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