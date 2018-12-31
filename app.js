// Define the `phonecatApp` module
var codenameApp = angular.module('codenameApp', []);
const NUM_SYMBOLS = 7;
// Define the `GameController` controller on the `phonecatApp` module
codenameApp.controller('GameController', function GameController($scope, $http) {
  $scope.words = [];
  $scope.pile = [];
  $scope.score = 0;
  
  $scope.refresh = function(){
	  $http({
      method: 'GET',
      url: 'https://s3-ap-southeast-2.amazonaws.com/ernieanomia/dictionary.json'
	  }).then(function successCallback(response) {
      $scope.words = response.data;
	  }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
	  });
  };  

  $scope.addCard = function(){
    let newWord = $scope.words[Math.floor(Math.random() * $scope.words.length)];
    let newSymbol = Math.floor(Math.random() * NUM_SYMBOLS);
    let card = {
      word: newWord,
      symbol: newSymbol
    };
    $scope.pile.push(card);
  };

  $scope.removeCard = function(){
    if ($scope.pile.length > 0) {
      $scope.pile.pop();
    }
  };

  $scope.addScore = function(){
    $scope.score = $scope.score + 1;
  };

  $scope.getImgSrc = function(){
    return `${$scope.pile[$scope.pile.length - 1].symbol}.png`;
  }

  $scope.refresh();
  
  
});