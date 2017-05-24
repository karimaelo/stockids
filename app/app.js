var stockidsApp = angular.module('stockidsApp', ['ngRoute']);

stockidsApp.config(function($routeProvider) {
	  $routeProvider.
	    when('/login', {
		templateUrl: 'app/views/login.html',
		controller: 'StockidsAppController'
	    })
	    .when('/dashboard', {
	        templateUrl: 'app/views/dashboard.html',
    		controller: 'StockidsAppController'
	    })
	    .when('/profile', {
	        templateUrl: 'app/views/profile.html',
    		controller: 'StockidsAppController'
	    })
	    .when('/leaderboard', {
	        templateUrl: 'app/views/leaderboard.html',
    		controller: 'StockidsAppController'
	    }).otherwise({
	    	redirectTo: '/dashboard'
	    });
	  });

stockidsApp.controller('StockidsAppController', function StockidsAppController($scope) {
    $scope.users = [
      {
          username: 'kareem',
          email: 'karimaelo@gmail.com',
          password: 'chase123',
          selected: 'false',
          portfolio: [
              {
                  stockcode: 'AMZN',
                  boughtdate: '2017/05/23',
                  boughtprice: 950,
                  solddate: '',
                  soldprice: 0,
                  quantity: 1000
              },
              {
                  stockcode: 'AMZN',
                  boughtdate: '2017/05/21',
                  boughtprice: 900,
                  solddate: '2017/05/22',
                  soldprice: 1000,
                  quantity: 500
              },
              {
                  stockcode: 'AAPL',
                  boughtdate: '2017/05/20',
                  boughtprice: 100,
                  solddate: '',
                  soldprice: 0,
                  quantity: 10000
              },
              {
                  stockcode: 'GOOGL',
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
	        portfolio: [
                {
                    stockcode: 'AMZN',
                    boughtdate: '2017/05/20',
                    boughtprice: 2000,
                    solddate: '2017/05/22',
                    soldprice: 750,
                    quantity: 500
                },
                {
                    stockcode: 'AMZN',
                    boughtdate: '2017/05/21',
                    boughtprice: 800,
                    solddate: '2017/05/22',
                    soldprice: 900,
                    quantity: 200
                },
                {
                    stockcode: 'AAPL',
                    boughtdate: '2017/05/21',
                    boughtprice: 120,
                    solddate: '',
                    soldprice: 0,
                    quantity: 100000
                },
                {
                    stockcode: 'GOOGL',
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
	        portfolio: [
                {
                    stockcode: 'AMZN',
                    boughtdate: '2017/05/23',
                    boughtprice: 900,
                    solddate: '',
                    soldprice: 0,
                    quantity: 1000
                },
                {
                    stockcode: 'AMZN',
                    boughtdate: '2017/05/21',
                    boughtprice: 1000,
                    solddate: '2017/05/22',
                    soldprice: 1000,
                    quantity: 500
                },
                {
                    stockcode: 'AAPL',
                    boughtdate: '2017/05/23',
                    boughtprice: 150,
                    solddate: '',
                    soldprice: 0,
                    quantity: 10000
                },
                {
                    stockcode: 'GOOGL',
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
            name: 'Amazon.com Inc.',
            code: 'AMZN',
            currdate: '2017/05/24',
            currprice: 975,
            stockindex: 'NASDAQ',
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
            name: 'Apple Inc.',
            code: 'AAPL',
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
            name: 'Alphabet Inc.',
            code: 'GOOGL',
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

