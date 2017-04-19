'use strict';

(function() {

  class RekapComponent {


    headerlaporan = ["Nama", "Induk", "Ukuran Dermaga",
      "Kapasitas", "Sandar", "Kondisi", "Atur"
    ];

    optionSelect = ["$", "nama", "induk",
      "kapasitas", "sandar", "kondisi"
    ];


    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.rawdata = [];
      this.data = [];

      angular.forEach(this.data, function(value, key) {
        this.data = value;
        console.log(value)
      });


    }

    $onInit() {
      this.$http.get('/api/datas')
        .then(response => {
          this.data = response.data;
          this.socket.syncUpdates('data', this.data);
        });
    }



  }

  angular.module('sipalApp')
    .component('rekap', {
      templateUrl: 'app/rekap/rekap.html',
      controller: RekapComponent,
      controllerAs: 'rekapCtrl'
    });

})();
