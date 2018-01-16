angular
  .module('navigation.toolbar', ['ngMaterial', 'ngMessages'])
  .component('toolbar', {
    templateUrl: 'app/navigation/toolbar/toolbar.template.html',
    controllerAs: 'ToolbarCtrl',
    controller: ['$mdSidenav', '$mdMedia',
      function toolbarCtrl($mdSidenav, $mdMedia) {
        console.log('Start TopNavCtrl');
        let self = this;

        self.$mdMedia = $mdMedia;
        self.toggleTitle = ' SideNav ';
        self.toggleSideNav = function() {

          console.log('toggling ...');
          $mdSidenav('left')
			     .toggle()
    	     .then(function() {
      	      console.log('toggled. open = ' +  $mdSidenav('left').isOpen());
    	     });
        };
      }
    ]
  });
