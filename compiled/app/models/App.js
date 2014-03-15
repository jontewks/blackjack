// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      return this.set('dealerHand', deck.dealDealer());
    };

    App.prototype.checkScores = function() {
      var dealerScore, playerScore;
      playerScore = this.get('playerHand').bestScore();
      dealerScore = this.get('dealerHand').bestScore();
      if (dealerScore > 21) {
        this.trigger('win', this);
      }
      if (playerScore > 21) {
        this.trigger('lose', this);
      }
      if (playerScore === 21 && this.get('playerHand').length === 2) {
        this.trigger('win', this);
      }
      if (dealerScore === 21 && this.get('dealerHand').length === 2) {
        this.trigger('lose', this);
      }
      if (this.get('dealerHand').first().get('revealed')) {
        if (dealerScore === playerScore) {
          return this.trigger('tie', this);
        } else if ((16 < dealerScore && dealerScore < 22)) {
          if (playerScore > dealerScore) {
            return this.trigger('win', this);
          } else {
            return this.trigger('lose', this);
          }
        } else if (dealerScore < 22) {
          this.get('dealerHand').hit();
          return this.checkScores();
        }
      }
    };

    App.prototype.newHand = function() {
      $('.games').empty();
      $('.message').empty();
      return new AppView({
        model: new App()
      }).$el.appendTo('.games');
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map
