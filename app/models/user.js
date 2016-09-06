import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  email: DS.attr('string'),
  photoURL: DS.attr('string'),
  juguetes: DS.hasMany('juguete',{async : true})
});
