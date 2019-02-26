// User-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const User = new Schema(
    {
      email: String,
      password: String,
      tweets: [
        {
          type: Schema.Types.ObjectId,
          ref: "Tweet"
        }
      ]
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("user", user);
};
