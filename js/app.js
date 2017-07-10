(function(){

  var appFont = angular.module('jimApp', ['ngRoute', 'InicioCtrl', 
  'HistoriaCtrl', 'ProductoCtrl', 'ContactoCtrl' ,'BuscarCtrl', 'LoginCtrl', 
  'BanerCtrl', 'ComentariosCtrl', 'BebidasCalientesCtrl', 'BebidasFriasCtrl',
  'ReposteriaCtrl', 'AlimentosCtrl', 'ListaProductosCtrl', 'PerfilCtrl']);

  appFont.config(function($routeProvider) {
        $routeProvider.when('/', {
          controller: 'InicioCtrl',
          templateUrl: 'templates/inicio.html'
        })
        $routeProvider.when('/historia', {
          controller: 'HistoriaCtrl',
          templateUrl: 'templates/historia.html'
        })
        $routeProvider.when('/producto', {
          controller: 'ProductoCtrl',
          templateUrl: 'templates/producto.html'
        })
        $routeProvider.when('/contacto', {//
          controller: 'ContactoCtrl',
          templateUrl: 'templates/contacto.html'
        })
        $routeProvider.when('/buscar', {
          controller: 'BuscarCtrl',
          templateUrl: 'templates/buscar.html'
        })
        $routeProvider.when('/login', {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.html'
        })
        //ADMIN
        $routeProvider.when('/admin', {
          templateUrl: 'admin/inicio.html'
        }) 
        $routeProvider.when('/admin/banners', {
          controller: 'BanerCtrl',
          templateUrl: 'admin/banners.html'
        })
        $routeProvider.when('/admin/comentarios', {
          controller: 'ComentariosCtrl',
          templateUrl: 'admin/comentarios.html'
        })
        $routeProvider.when('/admin/bebidas/calientes', {
          controller: 'BebidasCalientesCtrl',
          templateUrl: 'admin/calientes.html'
        })
        $routeProvider.when('/admin/bebidas/frias', {
          controller: 'BebidasFriasCtrl',
          templateUrl: 'admin/frias.html'
        })
        $routeProvider.when('/admin/reposteria', {
          controller: 'ReposteriaCtrl',
          templateUrl: 'admin/reposteria.html'
        })
        $routeProvider.when('/admin/reposteria', {
          controller: 'ReposteriaCtrl',
          templateUrl: 'admin/reposteria.html'
        })
        $routeProvider.when('/admin/alimentos/para/acompanar', {
          controller: 'AlimentosCtrl',
          templateUrl: 'admin/alimentos.html'
        })
        $routeProvider.when('/admin/lista/de/productos', {
          controller: 'ListaProductosCtrl',
          templateUrl: 'admin/productos.html'
        })
        $routeProvider.when('/admin/:name', {
          controller: 'PerfilCtrl',
          templateUrl: 'admin/perfil.html'
        })
        $routeProvider.otherwise({ 
          redirectTo: '/'
        });
    });

}());