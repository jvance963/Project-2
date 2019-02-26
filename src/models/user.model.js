// User-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const user = new Schema(
    {
      email: String,
      password: String,
      jobPost: [
        {
          type: Schema.Types.ObjectId,
          ref: "Job Post"
        }
      ]
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("user", user);
};
