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
	    	redirectTo: '/login'
	    });
	  });

stockidsApp.controller('StockidsAppController', function StockidsAppController($scope) {
	  $scope.users = [
	    {
	      username: 'kareem',
	      email: 'karimaelo@gmail.com',
	      password: 'chase123'
	    }, 
	    {
	        username: 'sran',
		    email: 'sm@gmail.com',
	        password: 'chase123'
	    }, 
	    {
	        username: 'alfredo',
	        email: 'idontknow@noone.ca',
	        password: 'chase123'
	    }
	  ];
	});

