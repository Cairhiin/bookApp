angular.
  module('newGenreForm').
  component('newGenreForm', {
    templateUrl: 'app/new-genre-form/new-genre-form.template.html',
    controllerAs: 'genreFormCtrl',
    controller: ['GenreService',
      function(service) {
        let self = this;


        service.save(function(data, headers) {
          self.genres = data;
        }, _handleError);
      }
    ]
  });
