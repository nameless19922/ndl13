'use strict';

pokemonApp.controller('PokemonEditCtrl', function($scope, PokemonsService, $routeParams) {
    $scope.editPokemon = {};

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.editPokemon = response.data;
        $scope.pokemonId = $scope.editPokemon.name;
    });

    $scope.updatePokemon = function(editPokemon, pokemonId) {
        $scope.editSuccess = false;

        PokemonsService.editPokemon(editPokemon, pokemonId).then(function (response) {
            $scope.editSuccess = true;
        });
    }
});
