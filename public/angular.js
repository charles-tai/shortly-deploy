
var app = angular.module('app',[]);
app.controller('linkController', function($scope,$http) {
  $scope.getLinks = function() {
    return $http({
      method: 'GET',
      url: '/links'
    }).then(function(res) {
      return res.data;
    });
  }
  $scope.postLink = function () {
    console.log('post');
    return $http.post('/links', {url: $scope.data})
              .success(function(data) {
                console.log('post success: ', data)
              });
  }
});