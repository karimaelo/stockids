(function() {
    var injectParams = [ '$scope', '$http', '$location', '$window', '$rootScope' ];

    var LoginController = function ($scope, $http, $location, $window, $rootScope) {
		$scope.message = "";
		$scope.email = "";
		$scope.password = "";

		$scope.user = null;

		$scope.users = users;

		$scope.submit = function() {
			$scope.message = "";
			var isValid = false;
			angular.forEach(users, function(value, key) {
				$scope.result = angular.fromJson(value);
				if ($scope.email == $scope.result.email && 
						$scope.password == $scope.result.password) {
				    $rootScope.user = $scope.result;
				    //$window.alert("Hello: " + $$rootScope.user.username);
				    //$scope.message = "Hello: " + $$rootScope.user.username;
				    isValid = true;
				}
			});
			if (isValid) {
				$location.path('/dashboard');
			} else {
				$scope.message = "Username/Password invalid. Please try again.";
			}
			
		};
	};

	LoginController.$inject = injectParams;

	angular.module('stockidsApp')
			.controller('LoginController', LoginController);

}());