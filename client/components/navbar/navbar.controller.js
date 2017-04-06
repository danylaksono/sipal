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

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  openNav() {
    //document.getElementById("mySidenav").style.width = "250px";
    this.sidenavOpened = true;
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    this.sidenavOpened = false;
  }

}

angular.module('sipalApp')
  .controller('NavbarController', NavbarController);
