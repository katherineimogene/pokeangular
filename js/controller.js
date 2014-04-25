var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('pokeController', function($scope, $http) {
    $scope.submit = function() {
        if ($scope.text) {
            $http.get('http://pokeapi.co/api/v1/pokemon/' + this.text + '/').
            success(function(data) {
                $scope.currentPokemon = data;
            });
        }
    };
    $scope.guess = function() {
        if (this.text2 == $scope.currentPokemon.name) {
            $scope.lastAnswer = "Correct!";
        } else {
            $scope.lastAnswer = "Incorrect!";
        }
    }
});