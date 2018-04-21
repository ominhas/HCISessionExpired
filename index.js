var app = angular.module('sessionExpired' ,[]);
app.controller('sessionController', function($scope, $http, $timeout) {
	$scope.auth = false;
	$scope.time = 5000;
	$scope.si = true;
	$scope.inp = 5;
	$scope.logger = "ng-show";
	$scope.logged = "ng-hide";
	$scope.login = function() {
		alert("You've logged in!");
		$scope.auth = true;
		$scope.logger = "ng-hide";
		$scope.logged = "ng-show";
	}
	$scope.expire = function() {
		alert("Your session has expired!");
		$scope.auth = false;
		$scope.logout();
	}
	$scope.update = function() {
		alert("Updated!");
		$scope.time = $scope.inp*1000;
		if ($scope.deactivate) {
			$scope.si = false;
			$timeout.cancel($scope.timer);
		}
	}
	$scope.logout = function() {
		$timeout.cancel($scope.timer);
		$scope.logger = "ng-show";
		$scope.logged = "ng-hide";
	}
	$scope.setTimer = function() {
		if ($scope.si && $scope.auth)
			$scope.timer = $timeout($scope.expire, $scope.time);
	}
	$scope.resetTimer = function() {
		$timeout.cancel($scope.timer);
	}
});