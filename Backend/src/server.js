const app = require("./index");
const connect = require("./config/db");
require("dotenv").config();
const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is Connected to Port ${port}`);
  } catch (er) {
    console.log("error happend in connect", er);
  }
});
