angular.
  module('bookDetails').
  component('bookDetails', {
    templateUrl: 'app/book-details/book-details.template.html',
    controllerAs: 'bookDetailsCtrl',
    bindToController: true,
    controller: ['BookService', '$routeParams',
      function bookDetailsCtrl(service, $routeParams) {
        let self = this;
        service.get({
          bookId: $routeParams.bookId
        }, function(data, headers) {
          self.book = data;
        }, _handleError);
      }
    ]
  });
