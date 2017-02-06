import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

let devs = [
  {
    id: 1,
    type: 'dev',
    username: 'device1',
    password: 'ohio',
    frequency: 10,
    sensors: [
      {
        id: 1,
        name: 'humidity',
        minVal: 12,
        maxVal: '33',
        eventEnable: true,
        lastValueRead: 22
      },
      {
        id: 1,
        name: 'pressure',
        minVal: 0,
        maxVal: 105,
        eventEnable: true,
        lastValueRead: 55
      }
    ]

  },
  {
    id: 2,
    type: 'dev',
    frequency: 60,
    username: 'device2',
    password: 'state',
    sensors: [
      {
        id: 1,
        name: 'light',
        minVal: 12,
        maxVal: 33,
        eventEnable: true,
        lastValueRead: 22
      }
    ]
  }
];

export default Ember.Route.extend(AuthenticatedRouteMixin, {

     model() {
        return devs;
 }
});
