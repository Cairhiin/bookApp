angular.
  module('core.publisher').
  factory('PublisherService', ['$resource', function($resource) {
    return $resource('/publishers/:publisherId', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
  }]);
