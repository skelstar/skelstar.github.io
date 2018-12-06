//angular 
//    .module('app')
//    .run(["$rootScope", "$location", function ($rootScope, $location) {
//        $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
//            // We can catch the error thrown when the $requireAuth promise is rejected
//            // and redirect the user back to the home page
//            if (error === "AUTH_REQUIRED") {
//                $location.path("/home");
//            }
//        });
//}]);

angular
    .module('app')
    .config(function ($routeProvider) {
        "use strict";
    
        $routeProvider
            .when('/home', {
                templateUrl: 'app/pages/home.html',
                controller: 'MainController'
            })
            .when('/class-list', {
                templateUrl: 'app/pages/class-list.html',
                controller: 'MainController'
            })
            .when('/class-blogs', {
                templateUrl: 'app/pages/class-blogs.html',
                controller: 'MainController'
            })
            .when('/calendar', {
                templateUrl: 'app/pages/calendar.html',
                controller: 'MainController'
            })
            .when('/information', {
                templateUrl: 'app/pages/information.html',
                controller: 'MainController'
            })
            .when('/history', {
                templateUrl: 'app/pages/history.html',
                controller: 'MainController'
            })
            .when('/contact', {
                templateUrl: 'app/pages/contact.html',
                controller: 'MainController'
            })
            .when('/visions', {
                templateUrl: 'app/pages/visions.html',
                controller: 'MainController'
            })
            .when('/mission', {
                templateUrl: 'app/pages/mission.html',
                controller: 'MainController'
            })
            .when('/values', {
                templateUrl: 'app/pages/values.html',
                controller: 'MainController'
            })
            .when('/howie', {
                templateUrl: 'app/pages/howie.html',
                controller: 'MainController'
            })
            .when('/trustees', {
                templateUrl: 'app/pages/trustees.html',
                controller: 'MainController'
            })
            .when('/homeandschool', {
                templateUrl: 'app/pages/homeandschool.html',
                controller: 'MainController'
            })
            .when('/library', {
                templateUrl: 'app/pages/library.html',
                controller: 'MainController'
            })
            .when('/login', {
                templateUrl: 'app/admin/login.html',
                controller: 'MainController'
            })
    //        .when('/admin', {
    //            controller: 'MainController',
    //            templateUrl: 'app/admin/admin.html',
    //            resolve: {
    //                "currentAuth": ["Auth", function (Auth) {
    //                    return Auth.$requireAuth();
    //                }]
    //            }
    //        })
            .otherwise({
                redirectTo: '/home'
            });

    });