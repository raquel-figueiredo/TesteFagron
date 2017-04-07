//Raquel Figueiredo - Teste para Desenvolvimento Front-end (AngularJS para popular informações)
angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.Nome = '';
$scope.Sobrenome = '';
$scope.DataNascimento = '';
$scope.Idade = '';
$scope.Profissao = '';

//Usuários já inseridos no código
$scope.users = [
{id:1, Nome:'Fabio', Sobrenome:"Souza", DataNascimento:"01/01/1987", Idade:"30 anos", Profissao: "Coordenador de Desenvolvimento" },
{id:2, Nome:'Milton',  Sobrenome:"Nascimento",  DataNascimento:"01/01/1987", Idade:"30 anos", Profissao: "Arquiteto de Sistemas" },
{id:3, Nome:'Raquel',  Sobrenome:"Figueiredo",  DataNascimento:"02/09/1995", Idade:"21 anos", Profissao: "Front-end" },
{id:4, Nome:'Bill', Sobrenome:"Gates",  DataNascimento:"28/10/1955", Idade:"61 anos", Profissao: "Fundador da Microsoft" },
{id:5, Nome:'Tim', Sobrenome:"Cook",  DataNascimento:"01/11/1960", Idade:"56 anos", Profissao: "CEO da Apple" },
{id:6, Nome:'Larry', Sobrenome:"Page",  DataNascimento:"26/03/1973", Idade:"44 anos", Profissao: "Co-Fundador da Google" }
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

$scope.$watch('Nome', function() {$scope.test();});
$scope.$watch('Sobrenome', function() {$scope.test();});
$scope.$watch('DataNascimento',function() {$scope.test();});
$scope.$watch('Idade',function() {$scope.test();});
$scope.$watch('Profissao',function() {$scope.test();});

});