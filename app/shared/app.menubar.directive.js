angular
    .module('app')
    .directive('menubar', function () {
        "use strict";

        return {
            templateUrl: "app/shared/menubar.template.html",
            restrict: 'E',
            controller: function ($scope, DataService) {
                $scope.data = {};

                activate();

                function activate() {
                    DataService
                        .getMenu()
                        .then(function (res) {
                            $scope.data = res.data.menu;
                            $scope.data.forEach(function (element, index, array) {
                                if (element.subitems.length > 0) {
                                    array[index].dropdownclass = "dropdown-menu";
                                }
                            });
                        });
                }
            }
        }
});
