'use strict';

angular.module('sipalApp', ['sipalApp.auth', 'sipalApp.admin',
    'sipalApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router',
    'ui.bootstrap',
    'validation.match', 'nemLogging', 'leaflet-directive',
    'angular-click-outside'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
