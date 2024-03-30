const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const AuthUser = mongoose.model("AuthUser", userSchema);

module.exports = AuthUser;
