'use strict';
let app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'bookList',
  'authorList',
  'genreList',
  'publisherList',
  'core',
  'navigation',
  'authorDetails',
  'genreDetails',
  'bookDetails',
  'publisherDetails',
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', { templateUrl: 'home.html' })
    .when('/books', { template: '<book-list></book-list>' })
    .when('/books/:bookId', { template: '<book-details></book-details>' })
    .when('/genres', { template: '<genre-list></genre-list>' })
    .when('/genres/:genreId', { template: '<genre-details></genre-details>' })
    .when('/publishers', { template: '<publisher-list></publisher-list>' })
    .when('/publishers/:publisherId', { template: '<publisher-details></publisher-details>' })
    .when('/authors', { template: '<author-list></author-list>' })
    .when('/authors/:authorId', { template: '<author-details></author-details>' })
    .otherwise('/');
}]);

let _handleError = function _handleError(err) {
  console.log(err);
}

let modifySubTitle = function modifySubTitle(data) {
  if (data.length > 1) {
    data.forEach(function(element) {
      ((element.title.sub) && (element.title.sub = "(" + element.title.sub + ")"));
    });
  } else {
    ((data.title.sub) && (data.title.sub = "(" + data.title.sub + ")"));
  }
}
