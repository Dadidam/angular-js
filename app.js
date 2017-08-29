(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodic',
      price: 32,
      description: 'Unique item for your and your spouse',
      canPurchase: true,
      soldOut: false,
      image: 'img/rubic_cube.jpg'
    },
    {
      name: 'Rubik',
      price: 726.81,
      description: 'Antistress toy',
      canPurchase: false,
      soldOut: false,
      image: 'img/rubic_cube.jpg'
    }
  ];
})();