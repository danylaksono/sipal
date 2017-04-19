  'use strict';

  (function() {

    class MainController {

      constructor($http, $scope, $rootScope, socket) {
          this.$http = $http;
          this.socket = socket;
          this.$scope = $scope;
          this.rootScope = $rootScope;
          this.markers = new Array();
          $scope.data = [];
          $scope.infocontent = {};
          $scope.openinfowindow = false;
          $scope.gambar = []

          $scope.center = {
            lat: -6.866007882805485,
            lng: 117.44335937499999,
            zoom: 5
          };

          this.icon = {
            lantamal: {
              type: 'awesomeMarker',
              icon: 'flag',
              markerColor: 'red'
            },
            lanal: {
              type: 'div',
              iconSize: [10, 10],
              className: 'lanal',
              iconAnchor: [5, 5]
            }
          };


          this.addData = function(data) {
            for (var i = 0; i < data.length; i++) {
              this.markers.push({
                id: data[i]._id,
                layer: data[i].layer,
                lat: Number(data[i].lat),
                lng: Number(data[i].lng),
                message: data[i].nama,
                icon: {}
              });
              if (this.markers[i].layer == 'lantamal') {
                this.markers[i].icon = this.icon.lantamal
              } else {
                this.markers[i].icon = this.icon.lanal
              }
            }
            //console.log(this.markers);
            this.rootScope.$broadcast('markers', this.markers);
          }

          /*
          //listening broadcasted event
          var sidenavListener = $rootScope.$on('sidenav', function(event,
            data) {
            //console.log(data);
          });
          $scope.$on('$destroy', sidenavListener);
          */

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
                  visible: true,
                  url: 'http://korona.geog.uni-heidelberg.de/tiles/adminb/x={x}&y={y}&z={z}',
                  layerOptions: {
                    showOnSelector: false,
                    maxZoom: 19,
                    attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  }
                },
                lantamal: {
                  type: 'group',
                  name: 'lantamal',
                  visible: true
                },
                lanal: {
                  type: 'group',
                  name: 'lanal',
                  visible: true
                }
              }
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
            var induk = {}
            for (var i = 0; i < $scope.data.length; i++) {
              if ($scope.data[i]._id === args.model._id) {
                $scope.infocontent = $scope.data[i];
                $scope.gambar = $scope.data[i].gambar;
                induk = $scope.data[i].induk;
              }
              /*
              if ($scope.data[i].induk === induk) {
                //selected.push(value);
                $scope.infocontent.induk = $scope.data[i].induk;
                $scope.data.selected = true;
                $scope.data[i].icon = {
                  type: 'div',
                  iconSize: [10, 10],
                  className: 'selected',
                  iconAnchor: [5, 5]
                }

              } */

            } //for

            /*
              angular.forEach($scope.data, function(value, key) {
                //console.log("value", value);
                if (value._id === args.model._id) {
                  $scope.infocontent = value;
                  console.log("induk", value.induk);
                  induk = value.induk;
                }
                if (value.induk === induk) {
                  selected.push(value);
                  $scope.infocontent.induk = value.induk;
                  $scope.data.icon = this.icon.selected;

            }
          });
          */

          });

          $scope.$on('leafletDirectiveMarker.popupclose', function(event,
            args) {

            $scope.openinfowindow = false;
            /*
            for (var i = 0; i < $scope.data.length; i++) {
              if ($scope.data[i].selected == true) {
                $scope.data[i].selected = false;
                $scope.data[i].icon = {
                  type: 'div',
                  iconSize: [10, 10],
                  className: 'lanal',
                  iconAnchor: [5, 5]
                }
              }
            };


            angular.element('.lanal').css('background-color',
              'blue');
              */
          });

          $scope.$on('$destroy', function() {
            socket.unsyncUpdates('data');
          });



        } //constructor



      $onInit() {
        this.$http.get('/api/datas')
          .then(response => {
            this.$scope.data = response.data;
            //console.log(this.$scope.data);
            this.socket.syncUpdates('data', this.$scope.data);
            for (var i = 0; i < this.$scope.data.length; i++) {
              this.$scope.data[i].message = this.$scope.data[i].nama;
              if (this.$scope.data[i].layer == 'lantamal') {
                this.$scope.data[i].icon = this.icon.lantamal
              } else {
                this.$scope.data[i].icon = this.icon.lanal
              }

              //console.log(this.$scope.data[i]);
            }
            //this.addData(this.$scope.data);
          });


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
      })

  })();
