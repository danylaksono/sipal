'use strict';

(function() {

  class MainController {



    constructor($http, $scope, $rootScope, socket, $uibModal) {
        this.$http = $http;
        this.socket = socket;
        this.$scope = $scope;
        this.rootScope = $rootScope;
        this.markers = new Array();
        $scope.data = [];
        $scope.infocontent = {};
        $scope.openinfowindow = false;


        //listening broadcasted event
        var sidenavListener = $rootScope.$on('sidenav', function(event, data) {
          console.log(data);
        });
        $scope.$on('$destroy', sidenavListener);

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
              enable: ['context', 'zoomstart', 'drag', 'click',
                'mousemove'
              ],
              logic: 'emit'
            }
          }
        };



        $scope.$on('leafletDirectiveMarker.click', function(event, args) {
          $scope.openinfowindow = true;
          //console.log('args', args.model.id)
          angular.forEach($scope.data, function(value, key) {
            //console.log("value", value);
            if (value._id == args.model.id) {
              $scope.infocontent = value;
              //console.log("nilai", value);
            }
          });
        });

        $scope.$on('leafletDirectiveMarker.popupclose', function(event,
          args) {
          $scope.openinfowindow = false;
        });

        $scope.$on('$destroy', function() {
          socket.unsyncUpdates('data');
        });



      } //constructor



    $onInit() {
      this.$http.get('/api/datas')
        .then(response => {
          this.$scope.data = response.data;
          this.socket.syncUpdates('data', this.$scope.data);
          for (var i = 0; i < this.$scope.data.length; i++) {
            this.markers.push({
              id: response.data[i]._id,
              lat: Number(response.data[i].lat),
              lng: Number(response.data[i].lng),
              message: response.data[i].nama,
              icon: {
                type: 'awesomeMarker',
                icon: 'flag',
                markerColor: 'red'
              }
            });
          };

        });

      //console.log(this.data);


      //this.initMap();
    }

    tester() {
      console.log('tester')
    }



    ok() {
      $uibModalInstance.close($ctrl.selected.item);
    };

    cancel() {
      $uibModalInstance.dismiss('cancel');
    };

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
