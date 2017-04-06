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
            Esri_OceanBasemap: {
              name: 'ESRI Ocean',
              type: 'xyz',
              url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
              layerOptions: {
                showOnSelector: false,
                attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
                maxZoom: 13
              }
            }
          },
          overlays: {
            OpenMapSurfer_AdminBounds: {
              name: 'OpenMapSurfer',
              type: 'xyz',
              url: 'http://korona.geog.uni-heidelberg.de/tiles/adminb/x={x}&y={y}&z={z}',
              layerOptions: {
                checked: true,
                showOnSelector: false,
                maxZoom: 19,
                attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              }
            }
          }

        },
        center: {
          lat: -5.266007882805485,
          lng: 119.44335937499999,
          zoom: 5
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
      $logProvider.debugEnabled(false);
    });

})();
