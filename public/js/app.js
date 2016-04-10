var app = angular.module('metViz', []);

app.controller('NavigationController', function ($scope) {
  $scope.branches = [{
    name: 'branch1'
  },
    {
      name: 'branch2'
    }];
  $scope.metrics = [
    'metric1.median',
    'metric1.p95',
    'metric1.p99'
  ];

  $scope.selected = {}

});