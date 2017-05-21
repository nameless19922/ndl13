angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {
        $http.defaults.headers.common = undefined;

            return {
                getBerries: function() {
                    return $http({
                        method: 'GET',
                        url: 'http://pokeapi.co/api/v2/berry/?limit=5'
                    });
                }
            }
        }
    );
