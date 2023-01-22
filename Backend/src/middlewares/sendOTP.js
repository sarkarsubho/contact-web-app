const accountSid = "ACb6cb6aab129cf96bdfb32177e2e8b0d5";
const authToken = "683e2b318a3565415f3045b0ee2b601b";

const client = require("twilio")(accountSid, authToken);

const sendOTP = async (req, res, next) => {
  console.log(req.body);
  client.messages
    .create({
      to: `+91${req.body.phone}`,
      from: "+16088892412",
      body: req.body.message,
    })
    .then((message) => {
      console.log(`Message SID ${message.SID}`);
      next();
    })
    .catch((error) => {
      console.log("error from twilow", error);
      return res
        .status(500)
        .send(
          "The number is unverified. Trial accounts cannot send messages to unverified numbers; verify at twilio."
        );
    });

  console.log("otp sent");
};

module.exports = { sendOTP };
