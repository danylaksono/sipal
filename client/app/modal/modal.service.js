'use strict';

function modalService() {
  // AngularJS will instantiate a singleton by calling "new" on this function

  return 'mbuh';
}

angular.module('sipalApp')
  .service('modal', modalService);
