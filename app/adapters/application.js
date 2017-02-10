import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: 'http://localhost:8080',
  authorizer: 'authorizer:oauth2',
});
