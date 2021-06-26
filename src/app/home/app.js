var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.consoleLog = '';
  $scope.sites = [
    {name: 'site1', id: 001, datasources:[
      {name: 'one', id: 441},
      {name: 'two', id: 442},
      {name: 'three', id: 443}
    ]},
    {name: 'site2', id: 002, datasources:[
      {name: 'four', id: 444},
      {name: 'five', id: 445},
      {name: 'six', id: 446},
      {name: 'seven', id: 447}
    ]}];
    
    $scope.selectedSite = $scope.sites[0];
    $scope.selectedDs = $scope.selectedSite.datasources[0];
    console.log($scope.selectedSite);
});
