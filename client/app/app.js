'use strict';

angular.module('sipalApp', ['sipalApp.auth', 'sipalApp.admin',
    'sipalApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router',
    'ui.bootstrap',
    'validation.match', 'nemLogging', 'leaflet-directive'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    //$.material.init()
    $locationProvider.html5Mode(true);
  });
