'use strict';

angular.module('sipalApp.auth', ['sipalApp.constants', 'sipalApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
