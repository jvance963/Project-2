// job-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const job = new Schema(
    {
      content: String,
      createdAt: {
        type: Date,
        default: Date.now()
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    },

    {
      timestamps: true
    }
  );

  return mongooseClient.model("job", job);
};
