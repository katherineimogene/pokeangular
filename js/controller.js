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
            $scope.currentPokeImg = $scope.getPokeImg($scope.currentPokemon)
        })
    }

    $scope.submitUserGuess = function() {
        $scope.catchLastPokemon()
        $scope.evaluateGuess(this.text2)
        $scope.resetInputField()
    }

    $scope.evaluateGuess = function(userGuess){
        if (userGuess == $scope.currentPokemon.name) {
            $scope.respondReset("correctly!",1)
        } else {
            $scope.respondReset(userGuess,0)
        }
    }

    $scope.catchLastPokemon = function() {
        $scope.caughtPokemon = $scope.currentPokemon
        $scope.caughtOne = true
        $scope.caughtPokeImg = $scope.getPokeImg($scope.caughtPokemon)
    }

    $scope.respondReset = function(response,countChange){
        $scope.feedback = response
        $scope.updateCount(countChange)
        $scope.getPoke()
    }

    $scope.updateCount = function(countChange) {
        $scope.correctCount += countChange
    }

    $scope.resetInputField = function(){
        this.text2 = ""
    }

    $scope.getPokeImg = function(thisPoke){
        return "http://pokeapi.co/media/img/"+thisPoke.national_id+".png"
    }
})