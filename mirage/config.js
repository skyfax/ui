export default function () {

  this.post('/token', () => {

    return {
      token: 'secret1234.asdf.test',
      token_type: 'jwt',
      expires_in: 7200,
      user_id: '1'
    };
  });

  this.get('/devs', function (db, request) {
    let devs = [
      {
        id: 1,
        type: 'dev',

        attributes: {
          username: 'device1',
          password: 'ohio',
          frequency: 10,
          sensors: [
            {
              id: 1,
              type: 'sensor',
              attributes: {
                name: 'humidity',
                minVal: 12,
                maxVal: '33',
                eventEnable: true,
                lastValueRead: 22
              }
            },
            {
              id: 2,
              type: 'sensor',
              attributes: {
                name: 'pressure',
                minVal: 0,
                maxVal: 105,
                eventEnable: true,
                lastValueRead: 55
              }
            }
          ]
        }
      },
      {
        id: 2,
        type: 'dev',
        attributes: {
          frequency: 60,
          username: 'device2',
          password: 'state',
          sensors: [
            {
              id: 1,
              type: 'sensor',
              attributes: {
                name: 'light',
                minVal: 12,
                maxVal: 33,
                eventEnable: true,
                lastValueRead: 22
              }
            },
            {
              id: 2,
              type: 'sensor',
              attributes: {
                name: 'brightness',
                minVal: 12,
                maxVal: 33,
                eventEnable: true,
                lastValueRead: 22
              }
            }
          ]
        }
      }
    ];

    if (request.queryParams.city !== undefined) {
      return {data: devs};
    } else {
      return {data: devs};
    }

  });

}
