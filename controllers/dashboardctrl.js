var tmsapp = angular.module("tmsapp",["ngRoute","ngSanitize","ngCookies","ui.router"]);



tmsapp.config(function($routeProvider,$locationProvider,$urlRouterProvider,$stateProvider) {

				$stateProvider
				.state('dashboard',{
		/*			resolve :{
						"check" : function($location,$cookies){
								if(!$cookies.get("vstmsisloggedin")){
									console.log("Error: Not loggedIn");
								}
						}
					},*/
					url : "/dashbord",
					templateUrl :"views/dashboard.html",
					controller  :  "dashboardController"
				})
				.state('addvendersuppliers',{
					url:"/addvs",
					templateUrl : "views/addvendersupplier.html",	
					controller  :  "vsController"
				})
				.state('additem',{
					url : "/additem",
					templateUrl : "views/additem.html",
					controller  :  "additemController"
				})
				.state('payments',{
					url : "/payments",
					templateUrl : "views/payment.html",
					controller  :  "paymentsController"
				})
				.state('receipt',{
					url : "/receipt",
					templateUrl : "views/receipt.html",
					controller  :  "receiptController"
				})
				.state('salesform1',{
					url : "/salesform",
					templateUrl : "views/salesform1.html",
					controller  :  "salesform1Controller"
				})

				
				.state('rot',{
					url:'/',
				/*	template : "404 not found",*/
					templateUrl:"views/dashboard.html"
				});
				$urlRouterProvider.otherwise('/');

				
				
				$locationProvider.hashPrefix('');
				/*$locationProvider.html5Mode({
				    enabled: true,
				    requireBase: false
				});*/
			});
			

		tmsapp.controller('rootCtrl',function($scope,$rootScope,$cookies,$location){
			$rootScope.pageheading ="";
			if(!$cookies.get("vstmsisloggedin")){
				window.location="http://localhost/vstms/index.html";
			}
				$scope.logoutfromvstms=function(){
					$cookies.remove("vstmsisloggedin");
					alert("You have been logged out successfully");
					window.location="http://localhost/vstms/index.html";
				}
				//console.log("Not loggedIn");
			
		});
		tmsapp.controller('dashboardController',  function($rootScope,$scope){
					
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-home text-primary'> <span class='pageheading'>Dashboard <span></h3>";

			});
		tmsapp.controller('vsController',  function($rootScope,$scope){
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-plus text-primary'> <span class='pageheading'>Add Vendor/Supplier</span></h3>";

			});
		tmsapp.controller('additemController',  function($rootScope,$scope){
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-gift text-primary'> <span class='pageheading'>Add Item </h3>";

			});
		tmsapp.controller('paymentsController',  function($rootScope,$scope){
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-usd text-primary'> <span class='pageheading'>Payment </h3>" ;

			});
		tmsapp.controller('receiptController',  function($rootScope,$scope){
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-list-alt text-primary'> <span class='pageheading'>Receipt </h3>";

			});
		tmsapp.controller('salesform1Controller',  function($rootScope,$scope){
					$rootScope.pageheading = "<h3 class='glyphicon glyphicon-home text-primary'> <span class='pageheading'>Sales Form</h3>";

			});

					

