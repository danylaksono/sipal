'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];


      this.map = {
        layers: {
          baselayers: {
            osm: {
              name: 'openstreetmap',
              type: 'xyz',
              url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            }
          }
        },
        center: {
          lat: 3.59520,
          lng: 98.67222,
          zoom: 8
        },
        controls: {},
        markers: {},
        events: {
          marker: {
            enable: [],
            logic: 'emit'
          },
          map: {
            enable: ['context'],
            logic: 'emit'
          }
        }
      };

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('sipalApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    })
    .config(function($logProvider) {
      $logProvider.debugEnabled(true);
    });

})();
