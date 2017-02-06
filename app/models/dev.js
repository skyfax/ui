import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  frequency: DS.attr(),
  sensors: DS.hasMany('sensor')
});
