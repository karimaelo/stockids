(function() {
	var injectParams = [ '$scope', '$http', '$location' ];

	var LoginController = function($scope, $http, $location) {
		$scope.email = "";
		$scope.password = "";

		$scope.users = users;

		$scope.submit = function() {
			angular.forEach(users, function(value, key) {
				$scope.result = angular.fromJson(value);
				if ($scope.email == $scope.result.email && 
						$scope.password == $scope.result.password) {
					$location.path('/dashboard');
				}
			});
		};
	};

	LoginController.$inject = injectParams;

	angular.module('stockidsApp')
			.controller('LoginController', LoginController);

}());