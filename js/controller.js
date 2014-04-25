var pokeApp = angular.module('pokeApp', [])

pokeApp.controller('pokeController', function($scope, $http) {
    angular.element(document).ready(function(){
        $scope.getPoke()
    })

    $scope.getPoke = function(){
        var pokeId = Math.floor(Math.random() * 151) + 1
        $http.get('http://pokeapi.co/api/v1/pokemon/' + pokeId+ '/').
        success(function(data) {
            $scope.currentPokemon = data
        })
    }

    $scope.guess = function() {
        if (this.text2 == $scope.currentPokemon.name) {
            $scope.lastAnswer = "Correct!"
            $scope.getPoke()
        } else {
            $scope.lastAnswer = this.text2 + " is incorrect! It was.." + $scope.currentPokemon.name
            $scope.getPoke()
        }
        this.text2 = ""
    }
})