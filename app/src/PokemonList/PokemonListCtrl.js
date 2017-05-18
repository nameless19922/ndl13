'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, $q, PokemonsService, BerriesService) {
    var requests = [
        PokemonsService.getPokemons(),
        BerriesService.getBerries()
    ];

    $scope.loading = true;

    $q.all(requests).then(function (response) {
        $scope.pokemons = response[0].data.results;
        $scope.berries  = response[1].data.results;

        $scope.loading = false;
    });
});
