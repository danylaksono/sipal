'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  sidenavOpened = false;
  //end-non-standard

  constructor(Auth, $rootScope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.rootScope = $rootScope;
    this.cari = '';
  }

  toggleSidebar(state) {
    if (state == 'open') {
      this.sidenavOpened = true;
    } else {
      this.sidenavOpened = false;
    };

    this.rootScope.$broadcast('sidenav', this.sidenavOpened)
  }

  openNav() {
    //document.getElementById("mySidenav").style.width = "250px";
    this.sidenavOpened = true;
    this.rootScope.$broadcast('sidenav', this.sidenavOpened)
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    this.sidenavOpened = false;
  }

}

angular.module('sipalApp')
  .controller('NavbarController', NavbarController);
