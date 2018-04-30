var app = angular.module('sessionExpired' ,[]);
app.controller('sessionController', function($scope, $http, $timeout, $interval) {
	$scope.title = " Session Expired Prototype";
	$scope.blink = false;
	$scope.tmpcounter = 0;
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
		$scope.auth = false;
		$scope.canceller();
		$scope.logger = "ng-show";
		$scope.logged = "ng-hide";
	}
	$scope.setTimer = function() {
		if ($scope.si && $scope.auth) {
			$scope.title = "s Session Expired Prototype";
			$scope.timer = $timeout($scope.expire, $scope.time);
			$scope.count = $interval($scope.countdown,500);
			$scope.counter = $scope.inp-1;
		}
	}
	$scope.resetTimer = function() {
		$scope.canceller();
	}
	$scope.countdown = function() {
		if($scope.blink) {
			$scope.title = "s Session Expired Prototype";
			$scope.counter = $scope.tmpcounter;
			$scope.counter--;
			if ($scope.counter == -1) {
				$scope.counter =  "";
				$interval.cancel($scope.count);
			}
			$scope.blink = false;
		} else {
			$scope.title = "CAUTION!!!!!";
			$scope.tmpcounter = $scope.counter;
			$scope.counter = "";
			$scope.blink = true;
		}

	}
	$scope.canceller = function() {
		$timeout.cancel($scope.timer);
		$interval.cancel($scope.count);
		$scope.counter = "";
		$scope.title = " Session Expired Prototype";
		$scope.blink = false;
	}
});
