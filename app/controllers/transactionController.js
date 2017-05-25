(function () {
    var injectParams = ['$scope', '$http', '$filter', '$window', '$rootScope'];

    var TransactionController = function ($scope, $http, $filter, $window, $rootScope) {
        $scope.message = $rootScope.user.username;

        $scope.buySelected = "true";
        $scope.sellSelected = "false";

        $scope.optionSelected = "1";

        $scope.options = [
               { name: 'Buy Stocks', id: 1 },
               { name: 'Sell Stocks', id: 2 }
        ];

        $scope.onOptionsChange = function () {
            //var currentSelected = $filter('filter')($scope.categories, { id: $scope.optionSelected })[0]
            //$window.alert("Selected Value: " + currentSelected.id + "\nSelected Text: " + currentSelected.name);
            if ($scope.optionSelected == "1") {
                $scope.buySelected = "true";
                $scope.sellSelected = "false";
            } else {
                $scope.buySelected = "false";
                $scope.sellSelected = "true";
            }
            $scope.message = $scope.buySelected;
        };

        $scope.users = users;

        $scope.stocks = [
            {
                name: 'Disney Inc.',
                code: 'DIS',
                currdate: '2017/05/24',
                currprice: 975,
                stockindex: 'NYSE',
                indexcountry: 'US',
                history: [
                    {
                        date: '2017/05/23',
                        startprice: 900,
                        endprice: 950
                    },
                    {
                        date: '2017/05/22',
                        startprice: 800,
                        endprice: 950
                    },
                    {
                        date: '2017/05/21',
                        startprice: 1000,
                        endprice: 900
                    },
                    {
                        date: '2017/05/20',
                        startprice: 100,
                        endprice: 1200
                    }
                ]
            },
            {
                name: 'Microsoft Inc.',
                code: 'MSFT',
                currdate: '2017/05/24',
                currprice: 155,
                stockindex: 'NASDAQ',
                indexcountry: 'US',
                history: [
                    {
                        date: '2017/05/23',
                        startprice: 150,
                        endprice: 150
                    },
                    {
                        date: '2017/05/22',
                        startprice: 100,
                        endprice: 150
                    },
                    {
                        date: '2017/05/21',
                        startprice: 90,
                        endprice: 100
                    },
                    {
                        date: '2017/05/20',
                        startprice: 150,
                        endprice: 100
                    }
                ]
            },
            {
                name: 'Mattel Inc.',
                code: 'MAT',
                currdate: '2017/05/24',
                currprice: 975,
                stockindex: 'NASDAQ',
                indexcountry: 'US',
                history: [
                    {
                        date: '2017/05/23',
                        startprice: 900,
                        endprice: 900
                    },
                    {
                        date: '2017/05/22',
                        startprice: 800,
                        endprice: 900
                    },
                    {
                        date: '2017/05/21',
                        startprice: 1000,
                        endprice: 800
                    },
                    {
                        date: '2017/05/20',
                        startprice: 1100,
                        endprice: 1000
                    }
                ]
            }
        ];

    };

    TransactionController.$inject = injectParams;

    angular.module('stockidsApp').controller('TransactionController', TransactionController);

}());