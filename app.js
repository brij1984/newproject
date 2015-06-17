var app = angular.module('myApp',['ngRoute']);

app.controller('homeCtrl',function($scope){
	$scope.x = "hello";
});
app.controller('bioCtrl',function($scope){
	$scope.x = "biography";
});
app.controller('contactCtrl',function($scope){
	$scope.x = "contact us at 8188898998";
});

app.config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeCtrl'
	}).when('/bio', {
		template: '<p style="color:red;">This is my {{x}}</p><a href="#home">Go Back</a>',
		controller: 'bioCtrl'
	}).when('/contact', {
		template: '<span>Please {{x}}</span><a href="#bio">TAke Me back</a>',
		controller: 'contactCtrl'
	}).otherwise({ redirectTo: '/home' });
});