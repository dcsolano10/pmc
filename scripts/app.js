'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
  'ui.router',
  'ngAnimate'
  ])
 .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/inicio');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('base', {
    abstract: true,
    url: '',
    templateUrl: 'views/base.html'
  })
  .state('login', {
    url: '/login',
    parent: 'base',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    parent: 'base',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('inicio', {
    url: '/inicio',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/inicio.html'
  })
  .state('informacion', {
    url: '/informacion',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/informacion.html'
  })
  .state('resultados', {
    url: '/resultados',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/resultados.html'
  });

});
