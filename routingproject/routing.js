var app = angular.module('myApp',['ngRoute']);

app.controller('homeCtrl',function($scope){
	
	$scope.x = "hello";
	
	$scope.A=false;
	$scope.B=true;
	$scope.ok=function(){
		$scope.A=true;
		$scope.B=false;
	}
});

app.controller('bioCtrl',function($scope){

	$scope.x = "biography";
});
app.controller('contactCtrl',function($scope){
	$scope.x = "Call me at 8188898998";
});

app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl:'home.html',
		controller: 'homeCtrl'
	}).when('/bio', {
		templateUrl: 'bio.html',
		controller: 'bioCtrl'

	}).when('/contact', {
		template:'<p>Please {{x}}</p><p>Email us at <a href="mailto:brij1014@gmai.com?Subject=Hello%20again" target="_top">brij1014@gmail.com</a></p>',
		controller: 'contactCtrl'
	}).otherwise({ redirectTo: '/home' });


	 

});

      