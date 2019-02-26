// Initializes the `proposal` service on path `/proposal`
const createService = require('feathers-mongoose');
const createModel = require('../../models/proposal.model');
const hooks = require('./proposal.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/proposal', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('proposal');

  service.hooks(hooks);
};
