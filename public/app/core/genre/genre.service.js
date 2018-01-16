angular.
  module('core.genre').
  factory('GenreService', ['$resource', function($resource) {
    return $resource('/genres/:genreId', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        update: {
          method: 'PUT',
        },
        save: {
          method: 'SAVE'
        }
      });
  }]);
