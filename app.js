// Define the `phonecatApp` module
var codenameApp = angular.module('codenameApp', []);

// Define the `GameController` controller on the `phonecatApp` module
codenameApp.controller('GameController', function GameController($scope, $http) {
  $scope.words = [];
  $scope.pile = [];
  
  // $scope.refresh = function(){
	//   $http({
  //     method: 'GET',
  //     url: 'https://l7plker6t7.execute-api.ap-southeast-2.amazonaws.com/prod/getwords'
	//   }).then(function successCallback(response) {
  //     $scope.words = response.data;
	//   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
	//   });
  // };  


  
  
});