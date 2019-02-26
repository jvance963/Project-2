const assert = require('assert');
const app = require('../../src/app');

describe('\'response\' service', () => {
  it('registered the service', () => {
    const service = app.service('response');

    assert.ok(service, 'Registered the service');
  });
});
