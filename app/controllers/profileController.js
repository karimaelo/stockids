(function () {
    var injectParams = ['$scope', '$http'];

    var ProfileController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;
        
        $scope.totalCart = function(){
            var total = 10;     
            return total;
        }        
    };

    ProfileController.$inject = injectParams;

    angular.module('stockidsApp').controller('ProfileController', ProfileController);

}());