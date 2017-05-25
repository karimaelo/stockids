(function () {
    var injectParams = ['$scope', '$http', '$filter', '$window', '$rootScope', '$location'];

    var ProfileController = function ($scope, $http, $filter, $window, $rootScope, $location) {
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