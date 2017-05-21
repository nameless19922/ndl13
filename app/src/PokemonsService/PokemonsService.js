 angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            return {
                getPokemons: function() {
                    return $http({
                        method: 'GET',
                        headers: {
                            'application-id': undefined,
                            'secret-key': undefined
                        },
                        url: 'http://pokeapi.co/api/v2/pokemon/?limit=10'
                    });
                },

                getPokemon: function(pokemonId) {
                    return $http({
                        method: 'GET',
                        headers: {
                            'application-id': undefined,
                            'secret-key': undefined
                        },
                        url: 'http://pokeapi.co/api/v2/pokemon/' + pokemonId
                    });
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonData, pokemonId) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                }
            }
        }
    );
