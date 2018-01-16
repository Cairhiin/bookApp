angular.
  module('authorList').
  component('authorList', {
    templateUrl: 'app/author-list/author-list.template.html',
    controllerAs: 'authorsCtrl',
    controller: ['AuthorService',
      function(AuthorService) {
        this.authors = AuthorService.query();
      }
    ]
  });
