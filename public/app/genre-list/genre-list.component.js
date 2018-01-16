angular.
  module('genreList').
  component('genreList', {
    templateUrl: 'app/genre-list/genre-list.template.html',
    controllerAs: 'genresCtrl',
    controller: ['GenreService',
      function(service) {
        let self = this;
        service.query(function(data, headers) {
          self.genres = data;
        }, _handleError);
      }
    ]
  });
