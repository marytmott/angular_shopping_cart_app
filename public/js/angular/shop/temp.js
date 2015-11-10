
  //   function addToBag(tea, quantity) {
  //     var shoppingBagStorage;
  //     var itemFound = false;

  //     quantity = parseInt(quantity);
  //     tea.subtotal = quantity * tea.price;

  //     //look for item in shopping bag
  //     vm.shoppingBag.forEach(function(item) {
  //       if (item._id === tea._id) {
  //         item.quantity = quantity;
  //         itemFound = true;
  //       }
  //     });

  //     //if item is not in shopping bag
  //     if (!itemFound) {
  //       vm.shoppingBag.push(tea);
  //     }
  //     shoppingBagStorage = JSON.stringify(vm.shoppingBag);
  //     localStorage.setItem('shoppingBag', shoppingBagStorage);
  //   }
  // }


})();




app.controller('ShopController', ['$scope', '$location', 'ShopInventory', function($scope, $location, ShopInventory) {
  // function makeCategoryArray(dataArr) {
  //   var categories = dataArr.map(function(tea) {
  //     return tea.categories;
  //   });
  //   //i <3 you underscore!
  //   //flatten array
  //   categories = _.flatten(categories);
  //   //remove duplicates
  //   categories = _.uniq(categories);
  //   return categories;
  // }
  // $scope.shoppingBag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
  // ShopInventory.getInventory().then(function(data) {
  //   console.log(data.data);
  //   $scope.teas = data.data;
  //   $scope.categories = makeCategoryArray(data.data);
  // });
  // $scope.alphabetical = '+name';
  // $scope.addToBag = function(tea, quantity) {
  //   var shoppingBagStorage;
  //   var itemFound = false;

  //   quantity = parseInt(quantity);
  //   tea.subtotal = quantity * tea.price;

  //   //look for item in shopping bag
  //   $scope.shoppingBag.forEach(function(item) {
  //     if (item._id === tea._id) {
  //       item.quantity = quantity;
  //       itemFound = true;
  //     }
  //   });

  //   //if item is not in shopping bag
  //   if (!itemFound) {
  //     tea.quantity = quantity;
  //     $scope.shoppingBag.push(tea);
  //   }
  //   shoppingBagStorage = JSON.stringify($scope.shoppingBag);
  //   localStorage.setItem('shoppingBag', shoppingBagStorage);
  // };
  // $scope.checkout = function() {
  //   $location.path('/shopping-bag');
  // }
}]);





app.controller('ShoppingBagController', ['$scope', function($scope) {
  function updateStorage() {
    var shoppingBagStorage = JSON.stringify($scope.shoppingBag);
    localStorage.setItem('shoppingBag', shoppingBagStorage);
  }
  function calcTotal() {
    var total = 0;
    $scope.shoppingBag.forEach(function(item) {
      total += item.subtotal;
    });
    $scope.orderTotal = total;
  }
  $scope.shoppingBag = JSON.parse(localStorage.getItem('shoppingBag'));
  console.log($scope.shoppingBag);
  $scope.editMode = false;
  $scope.changeMode = function(tea) {
    // console.log(tea.quantity);
    // if clicking save (editMode @ true)
    if ($scope.editMode) {
      console.log(tea.quantity);
      //if item quantity is 0
      if (!tea.quantity) {
        $scope.removeItem(tea);
      } else {
        $scope.shoppingBag.forEach(function(item) {
          if (item._id === tea._id) {
            item.quantity = parseInt(tea.quantity);
            item.subtotal = tea.quantity * tea.price;
          }
        });
      }
      calcTotal();
      updateStorage();
    }
    $scope.editMode = !$scope.editMode;
  };
  $scope.removeItem = function(tea) {
    var teaIndex = $scope.shoppingBag.indexOf(tea);
    $scope.shoppingBag.splice(teaIndex, 1);
    calcTotal();
    updateStorage();
  };
  calcTotal();
}])

//display shopping bag on first page if filled