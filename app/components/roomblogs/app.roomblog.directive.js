angular
    .module('app')
    .directive('roomblog', function () {
        "use strict";

        return {
            templateUrl: "app/components/roomblogs/roomblog.template.html",
            restrict: 'E',
            scope: {
                room: '=data'
            }
        };
    });
