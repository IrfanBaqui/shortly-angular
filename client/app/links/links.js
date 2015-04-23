angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  $scope.data = {};
  $scope.node = 'HI VINCEEEE!!!! OMG IT:S VINCE!!!!!';
  $scope.getLinks = function() {
    Links.getLinks($scope);
  };

  $scope.init = function(){
    console.log('controller Loaded');
    $scope.getLinks();
  };

  $scope.init();

});
