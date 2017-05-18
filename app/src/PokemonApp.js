var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'btford.socket-io']);

angular
    .module('PokemonApp')

.config(['$routeProvider', '$httpProvider',
    function config($routeProvider, $httpProvider) {
        var headers = {
            'application-id': '225FAF6C-BA0E-DDE8-FFF0-4F8E684F7200',
            'secret-key': 'F4F7A425-5C7D-AAD4-FF00-56926B7DD800'
        };

        // pokeapi ругается на заголовки "app-id", "secret-id" - устанавливаем для post, put delete
        $httpProvider.defaults.headers.post   = headers;
        $httpProvider.defaults.headers.delete = headers;
        $httpProvider.defaults.headers.put    = headers;

        $routeProvider.
            when('/pokemons', {
                templateUrl: 'src/PokemonList/PokemonList.html',
                controller: 'PokemonListCtrl'
            }).
            when('/pokemons/:pokemonId', {
                templateUrl: 'src/PokemonDetail/PokemonDetail.html',
                controller: 'PokemonDetailCtrl'
            }).
            when('/create', {
                templateUrl: 'src/CreatePokemon/CreatePokemon.html',
                controller: 'CreatePokemonCtrl'
            }).
            when('/edit/:pokemonId', {
                templateUrl: 'src/PokemonEdit/PokemonEdit.html',
                controller: 'PokemonEditCtrl'
            }).
            when('/realtime/:userName', {
                templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
                controller: 'PokemonRealtimeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
])

.factory('mySocket', function(socketFactory) {
  var myIoSocket = io.connect('https://netology-socket-io.herokuapp.com/');

    mySocket = socketFactory({
      ioSocket: myIoSocket
    });

    return mySocket;
});
