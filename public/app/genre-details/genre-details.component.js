angular.
  module('genreDetails').
  component('genreDetails', {
    templateUrl: 'app/genre-details/genre-details.template.html',
    controllerAs: 'genreDetailsCtrl',
    controller: ['GenreService', '$routeParams',
      function genreDetailsCtrl(service, $routeParams) {
        let self = this;
        service.get({
          genreId: $routeParams.genreId
        }, function(data, headers) {
          self.genre = data;
        }, _handleError);
      }
    ]
  });
