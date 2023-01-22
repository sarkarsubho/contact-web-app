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
    // console.log(req.body)
    console.log("message Created");
    const message=Message.create(req.body);
    return res.status(200).send({message});
  } catch (er) {
    return res.status(500).send({ error: er });
  }
});




module.exports = router;
