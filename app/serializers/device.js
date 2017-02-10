import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  /**
    https://github.com/emberjs/data/blob/v2.11.0/addon/serializers/json.js#L290
  */
  normalizeFindAllResponse(store, primaryModelClass, payload) {
    let devices = this._normalizeDevices(payload);
    return {
      data: devices,
    };
  },

  /**
    Convert to JSON-API format http://jsonapi.org/format/#document-structure
    Example:
    {
      "type": "device",
      "id": "1",
      "attributes": {
        // ... this article's attributes
      },
      "relationships": {
        // ... this article's relationships
      }
    }
  */
  _normalizeDevices(devices) {
    return devices.map(device => {
      var payload = device;
      return {
        id: payload.id,
        type: 'device',
        attributes: {
          username: payload.username,
          password: payload.password,
          frequency: payload.frequency,
          sensors: payload.sensors,
        },
      };
    });
  },
});
