(function() {
  var app = angular.module('store', ['store-products']);

  /* 
    App Controllers 
  */
  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];

    $http.get('/products.json').then(function(data) {
      store.products = data.data;
    });
  }]);

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();