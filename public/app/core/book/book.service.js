angular.
  module('core.book').
  factory('BookService', ['$resource', function($resource) {
    return $resource('/books/:bookId', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
  }]);
