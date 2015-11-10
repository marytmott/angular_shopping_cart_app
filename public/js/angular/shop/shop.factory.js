(function() {
  'use strict';

  angular.module('teaShop.shop')
    .factory('ShoppingBag', ShoppingBag);

  ShoppingBag.$inject = ['$http'];

  function ShoppingBag($http) {
    function getTeas() {
      return $http.get('/api/teas')
        .success(requestSuccess)
        .error(requestError);
    }

    //will function for user log in if developed out....
    function getShoppingBag() {
      return $http.get('/api/shopping-cart')
        .success(requestSuccess)
        .error(requestError);
    }

    function makeShoppingBag(tea, quantity) {
      var newBag = {
        items: [
          {
            tea_id: tea._id,
            quantity: parseInt(quantity)
          }
        ]
      };
      console.log(newBag);

      return $http.post('/api/shopping-cart', newBag)
        .success(requestSuccess)
        .error(requestError);
    }

    function updateShoppingBag(shoppingBag) {
      // console.log(shoppingBag);
      // var wrapUpBag = {
      //   items: shoppingBag
      // };
      return $http.put('/api/shopping-cart', shoppingBag)
        .success(requestSuccess)
        .error(requestError);
    }


    function requestSuccess(data) {
      // console.log(data);
      return data;
    }

    function requestError(error) {
      console.log(error);
    }


    return {
      getTeas: getTeas,
      getShoppingBag: getShoppingBag,
      makeShoppingBag: makeShoppingBag,
      updateShoppingBag: updateShoppingBag
    }

  }
})();



// app.factory('ShopInventory', ['$http', function($http) {
//   var Inventory = {};

//   Inventory.getInventory = function() {
//     return $http.get('/teas.json').success(function(data) {
//       return data;
//     });
//   };

//   return Inventory;
// }]);