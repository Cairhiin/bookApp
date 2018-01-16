angular.
  module('publisherDetails').
  component('publisherDetails', {
    templateUrl: 'app/publisher-details/publisher-details.template.html',
    controllerAs: 'publisherDetailsCtrl',
    controller: ['PublisherService', '$routeParams',
      function publisherDetailsCtrl(service, $routeParams) {
        let self = this;
        service.get({
          publisherId: $routeParams.publisherId
        }, function(data, headers) {
          self.publisher = data;
          console.log(self.publisher);
        }, _handleError);
      }
    ]
  });
