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

    $scope.guessPoke = function() {
        $scope.catchLastPokemon()
        $scope.evaluateGuess(this.text2)
        this.text2 = ""
    }

    $scope.evaluateGuess = function(userGuess){
        if (userGuess == $scope.currentPokemon.name) {
            $scope.feedback = "Correctly!"
            $scope.updateCount()
            $scope.getPoke()
        } else {
            $scope.feedback = userGuess
            $scope.getPoke()
        }
    }

    $scope.catchLastPokemon = function() {
        $scope.caughtPokemon = $scope.currentPokemon
        $scope.caughtOne = true
    }

    $scope.updateCount = function() {
        $scope.correctCount += 1
    }

})