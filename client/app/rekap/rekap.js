'use strict';

angular.module('sipalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rekap', {
        url: '/rekap',
        template: '<rekap></rekap>'
      });
  });
