angular.
  module('authorDetails').
  component('authorDetails', {
    templateUrl: 'app/author-details/author-details.template.html',
    controllerAs: 'authorDetailsCtrl',
    controller: ['$routeParams',
      function authorDetailsCtrl($routeParams) {
        let self = this;
        service.get({
          authorId: $routeParams.authorId
        }, function(data, headers) {
          self.author = data;
        }, _handleError);
      }
    ]
  });
