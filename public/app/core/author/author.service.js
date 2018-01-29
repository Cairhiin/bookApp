angular.
  module('core.author').
  factory('AuthorService', ['$resource', function($resource) {
    return $resource('/authors/:authorId', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        save: {
          method: 'PUT'
        }
      });
  }]);
