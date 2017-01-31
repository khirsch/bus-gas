import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll('tape');
  },
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
