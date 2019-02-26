// proposal-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const proposal = new Schema({
    content: String, 
    required: true,
     } 
    }
    timestamps: true
  });

  return mongooseClient.model('proposal', proposal);
};
