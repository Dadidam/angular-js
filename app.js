(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodic',
    price: 2.95,
    description: 'Some text here'
  }
})();