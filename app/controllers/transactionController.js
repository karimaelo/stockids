(function () {
    var injectParams = ['$scope', '$http', '$filter', '$window', '$rootScope', '$location'];

    var TransactionController = function ($scope, $http, $filter, $window, $rootScope, $location) {
        $scope.message = "";

        //$scope.buySelected = "true";
        //$scope.sellSelected = "false";

        $scope.optionSelected = "1";
        $scope.options = [
               { name: 'Buy Stocks', id: 1 },
               { name: 'Sell Stocks', id: 2 }
        ];

        $scope.onOptionsChange = function () {
            //var currentSelected = $filter('filter')($scope.categories, { id: $scope.optionSelected })[0]
            //$window.alert("Selected Value: " + currentSelected.id + "\nSelected Text: " + currentSelected.name);
            /*
            if ($scope.optionSelected == "1") {
                $scope.buySelected = "true";
                $scope.sellSelected = "false";
            } else {
                $scope.buySelected = "false";
                $scope.sellSelected = "true";
            }
            $scope.message = $scope.buySelected;
            */
        };

        $scope.stocks = [
            {
                name: 'Disney Inc.',
                code: 'DIS',
                currdate: '2017/05/24',
                currprice: 110,
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
                currprice: 70,
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
                currprice: 25,
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

        $scope.buyCodeSelected = "";
        $scope.buyStockPrice = "0";
        $scope.buyQuantity = "0";
        $scope.buyTotal = "0";

        $scope.onBuyStocksChange = function () {
            angular.forEach($scope.stocks, function (value, key) {
                $scope.result = angular.fromJson(value);
                if ($scope.buyCodeSelected == $scope.result.code) {
                    $scope.buyStockPrice = $scope.result.currprice;
                }
            });
            $scope.buyQuantity = "0";
            $scope.buyTotal = "0";
        };

        $scope.onBuyQuantityChange = function () {
            $scope.buyTotal = $scope.buyQuantity * $scope.buyStockPrice;
        };

        $scope.submit = function () {
            $window.alert("Transaction Submitted!");
            $location.path('/dashboard');
        };


        $scope.users = users;


    };

    TransactionController.$inject = injectParams;

    angular.module('stockidsApp').controller('TransactionController', TransactionController);

}());