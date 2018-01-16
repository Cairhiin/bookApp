angular.
  module('publisherList').
  component('publisherList', {
    templateUrl: 'app/publisher-list/publisher-list.template.html',
    controllerAs: 'publishersCtrl',
    controller: ['PublisherService',
      function(service) {
        let self = this;
        service.query(function(data, headers) {
          self.publishers = data;
        }, _handleError);
      }
    ]
  });
