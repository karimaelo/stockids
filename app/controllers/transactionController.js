(function () {
    var injectParams = ['$scope', '$http'];

    var TransactionController = function ($scope, $http) {
        $scope.greeting = "Hola!!!";
        $scope.users = users;
        
        $scope.totalCart = function(){
            var total = 10;     
            return total;
        }        
    };

    TransactionController.$inject = injectParams;

    angular.module('stockidsApp').controller('TransactionController', TransactionController);

}());