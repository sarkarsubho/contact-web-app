const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);
const connect = () => {
  return mongoose.connect(process.env.DB);
};
module.exports = connect;
