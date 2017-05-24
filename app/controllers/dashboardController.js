(function () {

    var injectParams = ['$scope', '$http'];

    var DashboardController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;
    };

    

    DashboardController.$inject = injectParams;

    angular.module('stockidsApp').controller('DashboardController', DashboardController);

}());