angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'app/book-list/book-list.template.html',
    controllerAs: 'booksCtrl',
    controller: ['BookService',
      function(service) {
        let self = this;
        service.query(function(data, headers) {
          self.books = data;
        }, _handleError);
      }
    ]
  });
