
var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
   when('/create', {
    templateUrl: 'shortenForm.html',
    controller: 'linkController'
  }).
   when('/', {
    templateUrl: 'allLinks.html',
    controller: 'linkController'
  }).
   otherwise({
    redirectTo: '/login.html'
  });
}]);

app.controller('linkController', function($scope,$http) {
  $scope.getLinks = function() {
    return $http({
      method: 'GET',
      url: '/links'
    }).then(function(res) {
      $scope.links =res.data;
    });
  };
  $scope.postLink = function () {
    console.log('post');
    return $http.post('/links', {url: $scope.data})
              .success(function(data) {
                console.log('post success: ', data);
                $scope.invalidUrl = false;
              })
              .error(function(data) {
                console.log('failed');
                $scope.invalidUrl = true;
              });
  };
});
