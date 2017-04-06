angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.Nome = '';
$scope.Sobrenome = '';
$scope.DataNascimento = '';
// $scope.passw2 = '';
$scope.users = [
{id:1, Nome:'Fabio', Sobrenome:"Souza" },
{id:2, Nome:'Milton',  Sobrenome:"Nascimento" },
{id:3, Nome:'Raquel',  Sobrenome:"Figueiredo" },
{id:4, Nome:'Bill', Sobrenome:"Gates" },
{id:5, Nome:'Steve', Sobrenome:"Jobs" },
{id:6, Nome:'Walt', Sobrenome:"Disney" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 
$scope.editUser = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.Nome = '';
    $scope.Sobrenome = '';
    } else {
    $scope.edit = false;
    $scope.Nome = $scope.users[id-1].Nome;
    $scope.Sobrenome = $scope.users[id-1].Sobrenome; 
  }
};

$scope.$watch('DataNascimento',function() {$scope.test();});
// $scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('Nome', function() {$scope.test();});
$scope.$watch('Sobrenome', function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.Nome.length ||
  !$scope.Sobrenome.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
  }
};

});