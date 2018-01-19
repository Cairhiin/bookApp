angular.
  module('authorDetails').
  component('authorDetails', {
    templateUrl: 'app/author-details/author-details.template.html',
    controllerAs: 'authorDetailsCtrl',
    controller: ['AuthorService', '$routeParams',
      function authorDetailsCtrl(service, $routeParams) {
        let self = this;
        service.get({
          authorId: $routeParams.authorId
        }, function(data, headers) {
          self.author = data;
          // modify the subtitle (if it exists) so it shows in brackets
          modifySubTitle(self.author.books);
        }, _handleError);
      }
    ]
  });
