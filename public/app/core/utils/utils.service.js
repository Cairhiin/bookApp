angular.
  module('core.utils').
  factory('Utils', [function() {
    let utils = {};

    utils._handleError = function _handleError(err) {
      console.log(err);
    }

    return utils;
  }]);
