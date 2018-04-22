var app = angular.module('sessionExpired' ,[]);
app.controller('sessionController', function($scope, $http, $timeout, $interval) {
	$scope.auth = false;
	$scope.time = 5000;
	$scope.si = true;
	$scope.inp = 5;
	$scope.logger = "ng-show";
	$scope.logged = "ng-hide";
	$scope.counter = "";
	$scope.login = function() {
		$scope.auth = true;
		$scope.logger = "ng-hide";
		$scope.logged = "ng-show";
		alert("You've logged in!");
	}
	$scope.expire = function() {
		$scope.auth = false;
		$scope.logout();
		alert("Your session has expired!");
	}
	$scope.update = function() {
		$scope.time = $scope.inp*1000;
		if ($scope.deactivate) {
			$scope.si = false;
			$scope.canceller();
		}
		else {
			$scope.si = true;
		}
		alert("Updated!");
	}
	$scope.logout = function() {
		$scope.canceller();
		$scope.logger = "ng-show";
		$scope.logged = "ng-hide";
	}
	$scope.setTimer = function() {
		if ($scope.si && $scope.auth) {
			$scope.timer = $timeout($scope.expire, $scope.time);
			$scope.count = $interval($scope.countdown,1000);
			$scope.counter = $scope.inp-1;
		}
	}
	$scope.resetTimer = function() {
		$scope.canceller();
	}
	$scope.countdown = function() {
		$scope.counter--;
		if ($scope.counter == -1) {
			$scope.counter =  "";
			$interval.cancel($scope.count);
		}
	}
	$scope.canceller = function() {
		$timeout.cancel($scope.timer);
		$interval.cancel($scope.count);
		$scope.counter = "";
	}
});