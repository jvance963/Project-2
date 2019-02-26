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

  User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };

  return mongooseClient.model("User", User);
};
