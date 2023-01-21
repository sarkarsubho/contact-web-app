const Message = require("../models/message.model");
const express = require("express");
const router = express.Router();
const {sendOTP ,createClint} = require("../middlewares/sendOTP");

router.get("/", async (req, res) => {
  try {
    const data = await Message.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er });
  }
});

router.post("/",sendOTP, async(req, res) => {
  try {
    console.log("message Created");
    //   const data = await Message.find({}).lean().exec();
    return res.status(200).send("data");
  } catch (er) {
    return res.status(500).send({ error: er });
  }
});

router.post("/veryfyClint",createClint, async(req, res) => {
    try {




      console.log("ok Created");
      //   const data = await Message.find({}).lean().exec();
      return res.status(200).send("data");
    } catch (er) {
      return res.status(500).send({ error: er });
    }
  });



module.exports = router;
