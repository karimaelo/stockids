(function() {
	var injectParams = [ '$scope', '$http', '$location' ];

	var LoginController = function($scope, $http, $location) {
		$scope.message = "";
		$scope.email = "";
		$scope.password = "";

		$scope.users = users;

		$scope.submit = function() {
			$scope.message = "";
			var isValid = false;
			angular.forEach(users, function(value, key) {
				$scope.result = angular.fromJson(value);
				if ($scope.email == $scope.result.email && 
						$scope.password == $scope.result.password) {
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