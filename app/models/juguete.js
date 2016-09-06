import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  precio: DS.attr('number'),
  medida: DS.attr('string'),
  usuario:DS.belongsTo('user',{async : true})
});
