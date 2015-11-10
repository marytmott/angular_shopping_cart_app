(function() {
  'use strict';

  angular.module('teaShop.shop')
    .filter('stockStatus', stockStatus);

  function stockStatus() {
    return function(input) {
      if (input) {
        return 'Yes';
      } else {
        return 'No';
      }
    }
  }
})();