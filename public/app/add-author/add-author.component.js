angular.
  module('addAuthor').
  component('addAuthor', {
    templateUrl: 'app/add-author/add-author.template.html',
    controllerAs: 'addAuthorCtrl',
    controller: ['AuthorService', '$q', '$log', '$timeout',
      function addAuthorCtrl(service, $q, $log, $timeout) {
        let self = this;
        self.isDisabled = false;

      // list of `author` value/display objects (value as lower case)
      let deffered;
      let promise = loadAll();

      self.querySearch   = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;
      self.newAuthor = newAuthor;

      function querySearch (query) {
        return promise.then(function(data) {
          self.authors = data;
          let results = query ? self.authors.filter( createFilterFor(query) ) : self.authors;
          return results;
        }, function(reason) {
          _handleError(reason);
        });
      }

      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
        window.location.replace("#/authors/" + item.id);
      }

      /**
       * Use promise to load author list from the database
       */
      function loadAll() {
        let authorsArray = [];
        deferred = $q.defer();
        service.query(function(data, headers) {
          data.forEach(function(element) {
          // combining first and last name into one - saving object id to later use as link
            authorsArray.push({ name: element.name.first + " " + element.name.last, id: element._id });
          });

          authorsArray = authorsArray.map(function(author) {
            return {
              value: author.name.toLowerCase(),
              display: author.name,
              id: author.id
            };
          });

          deferred.resolve(authorsArray);
        }, _handleError);

        return deferred.promise;
      }

    /**
     * Create filter function for a query string so it becomes case insensitive
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(author) {
        return (author.value.indexOf(lowercaseQuery) === 0);
      };

    }

    function createCapitalizeFilter(input) {
      return function(input) {
        return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
      }
    }

    function newAuthor(author) {
        let name = author.split(' ');
        let capitalizedName = name.map(function(element) {
          return element.charAt(0).toUpperCase() + element.substr(1).toLowerCase();
        });

        service.save({
             name: {
               first: capitalizedName[0],
               last: capitalizedName[1]
             }
         });
      }

    }
  ]
});
