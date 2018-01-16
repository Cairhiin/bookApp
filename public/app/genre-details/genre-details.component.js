angular.
  module('genreDetails').
  component('genreDetails', {
    templateUrl: 'app/genre-details/genre-details.template.html',
    controllerAs: 'genreDetailsCtrl',
    controller: ['$routeParams',
      function genreDetailsCtrl($routeParams) {
        let self = this;
        service.get({
          genreId: $routeParams.genreId
        }).then(function(response) {
          self.genre = response;
        }, _handleError);
      }
    ]
  });
