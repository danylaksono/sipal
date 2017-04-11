'use strict';

(function() {

  class MainController {



    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.data = [];

      this.icon = {
        type: 'awesomeMarker',
        icon: 'flag',
        markerColor: 'red'
      };



      this.markers = new Array();

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
                showOnSelector: false,
                maxZoom: 19,
                attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              }
            }
          }
        },
        center: {
          lat: -6.866007882805485,
          lng: 117.44335937499999,
          zoom: 5
        },
        controls: {},
        events: {
          marker: {
            enable: ['click'],
            logic: 'emit'
          },
          map: {
            enable: ['context', 'zoomstart', 'drag', 'click', 'mousemove'],
            logic: 'emit'
          }
        }
      };

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('data');
      });

      $scope.$on('leafletDirectiveMarker.click', function(event, args) {
        console.log(args.model)
          //console.log(event)
          // Check args param has leafletEvent, this is leaflet click event that
          // contains latitude and logitude from click

      });

      $scope.$on('leafletDirectiveMap.click', function(event, args) {
        //console.log(args)
        //console.log(event)
        // Check args param has leafletEvent, this is leaflet click event that
        // contains latitude and logitude from click

      });
    }



    $onInit() {
      this.$http.get('/api/datas')
        .then(response => {
          this.data = response.data;
          this.socket.syncUpdates('data', this.data);
          for (var i = 0; i < this.data.length; i++) {
            this.markers.push({
              id: response.data[i]._id,
              lat: Number(response.data[i].lat),
              lng: Number(response.data[i].lng),
              message: response.data[i].nama,
              icon: this.icon
            });
          };

        });

      //console.log(this.data);


      //this.initMap();
    }

    initMap() {
      console.log('init', this.data)
    }


    addThing() {
      if (this.newThing) {
        this.$http.post('/api/data', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/data/' + thing._id);
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
