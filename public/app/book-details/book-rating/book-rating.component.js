angular.
  module('bookDetails.bookRating').
  component('bookRating', {
    templateUrl: 'app/book-details/book-rating/book-rating.template.html',
    require: '^^bookDetails',
    bindings: {
      rating: '='
    },
    transclude: true,
    bindToController: true,
    controllerAs: 'bookRatingCtrl',
    controller: ['$localStorage',
      function bookRatingCtrl($localStorage) {
        const ratingMax = 5;

        let ctrl = this;
        ctrl.$storage = $localStorage;
        ctrl.hasVoted = ctrl.$storage.hasVoted;
        ctrl.voteValue = ctrl.$storage.voteValue;
        ctrl.selectRating = selectRating;
        ctrl.init = init;

        function init() {
          if (ctrl.hasVoted) {
            ctrl.rating = calculateWidth(ctrl.voteValue);
          }
        }

        function selectRating(evt) {
          if (ctrl.hasVoted) return false;
          let index = 1;
          let event = evt.toElement;

          // the number of previous siblings + 1 is the rating clicked
          while((event = event.previousElementSibling) != null) {
            index++;
          }
          ctrl.rating = calculateWidth(index);
          ctrl.hasVoted = true;

          // store the value in localstorage and set hasVoted to true
          ctrl.$storage.voteValue = index;
          ctrl.$storage.hasVoted = true;
        }

        function calculateWidth(value) {
            const starPercentage = (value / ratingMax) * 100;
            return `${(Math.round(starPercentage / 10) * 10)}%`;
        }
      }
    ]
  });
