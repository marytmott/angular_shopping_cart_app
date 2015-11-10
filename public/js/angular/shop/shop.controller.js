(function() {
  'use strict';

  angular.module('teaShop.shop')
    .controller('ShopController', ShopController);

  ShopController.$inject = ['$location', 'ShoppingBag'];

  function ShopController($location, ShoppingBag) {
    var vm = this;

    function makeCategoryArray(dataArr) {
      var categories = dataArr.map(function(tea) {
        return tea.categories;
      });
      //i <3 you underscore!
      //flatten array
      categories = _.flatten(categories);
      //remove duplicates
      categories = _.uniq(categories);
      return categories;
    }

    function getShoppingBag() {
      //will need to be modified for user
      return ShoppingBag.getShoppingBag().then(function(data) {
        setShoppingBag(data);
        return data;
      });
    }

    function setShoppingBag(data) {
      var bag = data.data;
      if (bag) {
        vm.shoppingBagLength = bag.items.length;
      } else {
        vm.shoppingBagLength = 0;
      }
    }

    function addToBag(tea, quantity) {
      quantity = parseInt(quantity);

      //if items in bag, find item
      if (vm.shoppingBagLength) {
        getShoppingBag().then(function(data) {
          var shoppingBag = data.data.items;
          var itemFound = false;

          shoppingBag.forEach(function(item) {
            if (item.tea_id === tea._id) {
              // console.log(item);
              item.quantity = quantity;
              itemFound = true;
              // console.log(item);
              // console.log(shoppingBag);
              //put request to update item quantity in shoppingBag
              ShoppingBag.updateShoppingBag(shoppingBag).then(function(data) {
                setShoppingBag(data);
              });
            }
          });

          if (!itemFound) {
            //put request to update new item in shoppingBag
            shoppingBag.push({ tea_id: tea._id, quantity: quantity});
            ShoppingBag.updateShoppingBag(shoppingBag).then(function(data) {
              console.log(data);
              setShoppingBag(data);
            });
          }
        });

      } else {
        //make new shoppingBag
        ShoppingBag.makeShoppingBag(tea, quantity).then(function(data) {
          setShoppingBag(data);
        });
      }
    }
    function checkout() {
      $location.path('/shopping-bag');
    }

    vm.alphabetical = '+name';

    vm.addToBag = addToBag;
    vm.checkout = checkout;
    ShoppingBag.getTeas().then(function(data) {
      vm.teas = data.data;
      vm.categories = makeCategoryArray(data.data);
    });
    getShoppingBag();
  }
})();