'use strict';

angular.module('sipalApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>',
      authenticate: 'admin'
    });
  });
