'use strict';

(function(){

class RekapComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('sipalApp')
  .component('rekap', {
    templateUrl: 'app/rekap/rekap.html',
    controller: RekapComponent,
    controllerAs: 'rekapCtrl'
  });

})();
