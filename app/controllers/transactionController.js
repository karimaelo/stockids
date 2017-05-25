(function () {
    var injectParams = ['$scope', '$http'];

    var TransactionController = function ($scope, $http) {
        $scope.options = [
               { name: 'Buy Stocks', id: 1, checked: true },
               { name: 'Sell Stocks', id: 2, checked: false }
        ];
        $scope.stocks = stocks;
        
    };

    TransactionController.$inject = injectParams;

    angular.module('stockidsApp').controller('TransactionController', TransactionController);

}());