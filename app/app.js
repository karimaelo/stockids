var stockidsApp = angular.module('stockidsApp', ['ngRoute']);

stockidsApp.config(function($routeProvider) {
	  $routeProvider.
	    when('/login', {
    		templateUrl: 'app/views/login.html',
    		controller: 'LoginController',
            controllerAs: 'login'
	    })
	    .when('/dashboard', {
	        templateUrl: 'app/views/dashboard.html',
	        controller: 'DashboardController',
	        controllerAs: 'dashboard'
	    })
	    .when('/profile', {
	        templateUrl: 'app/views/profile.html',
	        controller: 'ProfileController',
	        controllerAs: 'profile'
	    })
	    .when('/leaderboard', {
	        templateUrl: 'app/views/leaderboard.html',
	        controller: 'LeaderboardController',
	        controllerAs: 'leaderboard'
	    })
	    .when('/transaction', {
	        templateUrl: 'app/views/transaction.html',
	        controller: 'TransactionController',
	        controllerAs: 'transaction'
	    })
        .when('/data/', {
            redirectTo: '/data/'
        })
        .otherwise({
	    	redirectTo: '/login'
	    });
	  });


stockidsApp.controller('StockidsAppController', function StockidsAppController($scope) {
    $scope.users = [
      {
          username: 'kareem',
          email: 'karimaelo@gmail.com',
          password: 'chase123',
          selected: 'false',
          amount: 1000,
          portfolio: [
              {
                  stockcode: 'DIS',
                  boughtdate: '2017/05/23',
                  boughtprice: 950,
                  solddate: '',
                  soldprice: 0,
                  quantity: 1000
              },
              {
                  stockcode: 'DIS',
                  boughtdate: '2017/05/21',
                  boughtprice: 900,
                  solddate: '2017/05/22',
                  soldprice: 1000,
                  quantity: 500
              },
              {
                  stockcode: 'MSFT',
                  boughtdate: '2017/05/20',
                  boughtprice: 100,
                  solddate: '',
                  soldprice: 0,
                  quantity: 10000
              },
              {
                  stockcode: 'MAT',
                  boughtdate: '2017/05/20',
                  boughtprice: 900,
                  solddate: '',
                  soldprice: 0,
                  quantity: 500
              }]
	    }, 
	    {
	        username: 'sran',
		    email: 'sm@gmail.com',
	        password: 'chase123',
	        selected: 'false',
            amount: 10000,
	        portfolio: [
                {
                    stockcode: 'DIS',
                    boughtdate: '2017/05/20',
                    boughtprice: 2000,
                    solddate: '2017/05/22',
                    soldprice: 750,
                    quantity: 500
                },
                {
                    stockcode: 'DIS',
                    boughtdate: '2017/05/21',
                    boughtprice: 800,
                    solddate: '2017/05/22',
                    soldprice: 900,
                    quantity: 200
                },
                {
                    stockcode: 'MSFT',
                    boughtdate: '2017/05/21',
                    boughtprice: 120,
                    solddate: '',
                    soldprice: 0,
                    quantity: 100000
                },
                {
                    stockcode: 'MAT',
                    boughtdate: '2017/05/20',
                    boughtprice: 900,
                    solddate: '',
                    soldprice: 0,
                    quantity: 500
                }]
	    },
	    {
	        username: 'alfredo',
	        email: 'idontknow@noone.ca',
	        password: 'chase123',
	        selected: 'false',
	        amount: 25000,
	        portfolio: [
                {
                    stockcode: 'DIS',
                    boughtdate: '2017/05/23',
                    boughtprice: 900,
                    solddate: '',
                    soldprice: 0,
                    quantity: 1000
                },
                {
                    stockcode: 'DIS',
                    boughtdate: '2017/05/21',
                    boughtprice: 1000,
                    solddate: '2017/05/22',
                    soldprice: 1000,
                    quantity: 500
                },
                {
                    stockcode: 'MSFT',
                    boughtdate: '2017/05/23',
                    boughtprice: 150,
                    solddate: '',
                    soldprice: 0,
                    quantity: 10000
                },
                {
                    stockcode: 'MAT',
                    boughtdate: '2017/05/23',
                    boughtprice: 900,
                    solddate: '',
                    soldprice: 0,
                    quantity: 500
                }]
	    }
    ];
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
});

