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
            },
            selected: {
              type: 'div',
              iconSize: [10, 10],
              className: 'selected',
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
                  visible: true,
                },
                lanal: {
                  type: 'group',
                  name: 'lanal',
                  visible: true,
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

          this.changeIcon = function(data, icon) {
            for (var i = 0; i < data.length; i++) {
              data.icon = this.icon.icon
            }
          }

          $scope.$on('leafletDirectiveMarker.click', function(event, args) {

            $scope.openinfowindow = true;

            var induk = {}
            var selected = [];
            angular.forEach($scope.data, function(value, key) {
              //console.log("value", value);
              if (value._id === args.model.id) {
                $scope.infocontent = value;
                //console.log("induk", value.induk);
                induk = value.induk;
              }
              if (value.induk === induk) {
                selected.push(value);
                $scope.infocontent.induk = value.induk;
                /*
                angular.element('.lanal').css('background-color',
                  'yellow');
                  */
              }
            });

            //console.log("induk", selected);
            //this.tester();
          });

          $scope.$on('leafletDirectiveMarker.popupclose', function(event,
            args) {
            $scope.openinfowindow = false;

            /*
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
            this.socket.syncUpdates('data', this.$scope.data);
            this.addData(this.$scope.data);

            /*
            for (var i = 0; i < this.$scope.data.length; i++) {
              this.markers.push({
                id: this.$scope.data[i]._id,
                layer: this.$scope.data[i].layer,
                lat: Number(this.$scope.data[i].lat),
                lng: Number(this.$scope.data[i].lng),
                message: this.$scope.data[i].nama,
                icon: {}
              });

              //console.log(this.markers[i].layer);

              if (this.markers[i].layer == 'lantamal') {
                this.markers[i].icon = this.icon.lantamal
              } else {
                this.markers[i].icon = this.icon.lanal
              }


            };
            */
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
