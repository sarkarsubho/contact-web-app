const accountSid = "ACb6cb6aab129cf96bdfb32177e2e8b0d5";
const authToken = "127d5792e205961acebc1b486ec8c2c5";

const client = require("twilio")(accountSid, authToken);

const sendOTP = async (req, res, next) => {
  client.messages
    .create({
      to: "+919810153260",
      from: "+16088892412",
      body: "Hi. tomy Your OTP is: 12345.don't warry coming from subhankar",
    })
    .then((message) => console.log(`Message SID ${message}`))
    .catch((error) => console.error(error));

  console.log("otp sent");
  next();
};

const createClint = async (req, res, next) => {
    console.log("entered to create")
  client.validationRequests
    .create({
      friendlyName: "My Home Phone Number",
      phoneNumber: "+919810153260",
    })
    .then((validation_request) => {
      console.log("clint Created", validation_request.friendlyName);
   
    });
     next();
};

module.exports = { sendOTP, createClint };
