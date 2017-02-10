import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr('string'),
  password: attr('number'),
  frequency: attr('number'),
  sensors: hasMany('sensor'),
});
