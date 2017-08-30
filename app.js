(function() {
  var app = angular.module('store', [ ]);

  /* 
    App Controllers 
  */
  app.controller('StoreController', function() {
    this.products = gems;
  });

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

  /*
    Custom Directions
  */
  app.directive('productTitle', function() {
    return {
      restrict: 'A',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        this.tab = 1;
    
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    }
  });

  var gems = [
    {
      name: 'Dodic',
      price: 32,
      description: 'Unique item for your and your spouse',
      canPurchase: true,
      soldOut: false,
      image: 'img/rubic_cube.jpg',
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        },
        {
          stars: 1,
          body: 'This product sucks',
          author: 'tim@hater.com'
        }
      ]
    },
    {
      name: 'Rubik',
      price: 726.81,
      description: 'Antistress toy',
      canPurchase: false,
      soldOut: false,
      image: 'img/rubic_cube.jpg',
      reviews: [
        {
          stars: 5,
          body: 'I love this product!',
          author: 'joe@thomas.com'
        },
        {
          stars: 1,
          body: 'This product sucks',
          author: 'tim@hater.com'
        }
      ]
    }
  ];
})();