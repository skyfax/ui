import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({

  name: DS.attr(),
  minVal: DS.attr(),
  maxVal: DS.attr(),
  eventEnable: DS.attr(),
  lastValueRead: DS.attr(),
  dev: DS.belongsTo('device')
});
