var tmsapp = angular.module("tmsapp",["ngCookies"]);
	
	tmsapp.controller('loginctrl', ['$scope','$cookies', function($scope,$cookies){
			
		$scope.login=function(){
			var username = $scope.username;
			var pwd = $scope.pwd;
			$scope.myval= " ";
				if(username==" " || pwd==" " || username==undefined || pwd==undefined){
						$scope.errMsg="Username and Password can't be empty!";
				}else if(username=="admin" && pwd=="admin"){
					$scope.myval="ok";
					$cookies.put("vstmsisloggedin","vstmsloggedinsucess");
					window.location="home.html";
				}else{
					$scope.myval=" ";
					$scope.errMsg="Invalid username and password!";
				}
		}

	}]);
