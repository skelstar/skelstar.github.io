angular
    .module('app')
    .service('DataService', DataService);

function DataService($http) {
    "use strict";
    
    this.getMenu = function () {
        return $http.get('app/data/menu.json');
    };
    
    this.getStaff = function () {
        return $http.get('app/data/classes.json');
    };
    
    this.getBrand = function () {
        return $http.get('app/data/brand.json');
    };

}
