angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {

  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks($scope);
  };

  $scope.init = function(){
    console.log('controller Loaded');
    $scope.getLinks();
  };

  $scope.init();

});
