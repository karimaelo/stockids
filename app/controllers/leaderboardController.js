(function () {

    var injectParams = ['$scope', '$http'];

    var LeaderboardController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;
        $scope.leaderboard = leaderboard;
    };

    

    LeaderboardController.$inject = injectParams;

    angular.module('stockidsApp').controller('LeaderboardController', LeaderboardController);

}());