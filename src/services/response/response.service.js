// Initializes the `response` service on path `/response`
const createService = require('feathers-mongoose');
const createModel = require('../../models/response.model');
const hooks = require('./response.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/response', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('response');

  service.hooks(hooks);
};
