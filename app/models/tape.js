import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  title: DS.attr(),
  date: DS.attr(),
  synopsis: DS.attr(),
  price: DS.attr(),
  quantity: DS.attr()
});
