(function () {

    var injectParams = ['$scope', '$http'];

    var LeaderboardController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;
    };

    

    LeaderboardController.$inject = injectParams;

    angular.module('stockidsApp').controller('LeaderboardController', LeaderboardController);

}());