var pokeApp = angular.module('pokeApp', [])

pokeApp.controller('pokeController', function($scope, $http) {
    angular.element(document).ready(function() {
        $scope.getPoke()
        $scope.caughtOne = false
    })
    $scope.correctCount = 0

    $scope.getPoke = function() {
        var pokeId = Math.floor(Math.random() * 151) + 1
        $http.get('http://pokeapi.co/api/v1/pokemon/' + pokeId + '/').
        success(function(data) {
            $scope.currentPokemon = data
        })
    }

    $scope.guess = function() {
        $scope.catchLastPokemon()
        $scope.lastGuess = this.text2
        if (this.text2 == $scope.currentPokemon.name) {
            $scope.lastAnswer = "Correct!"
            $scope.updateCount()
            $scope.getPoke()
        } else {
            $scope.lastAnswer = this.text2
            $scope.getPoke()
        }
        this.text2 = ""
    }

    $scope.catchLastPokemon = function() {
        $scope.caughtPokemon = $scope.currentPokemon
        $scope.caughtOne = true
    }

    $scope.updateCount = function() {
        $scope.correctCount += 1
    }

})