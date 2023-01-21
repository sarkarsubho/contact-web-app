const Contact = require("../models/contact.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Contact.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er });
  }
});

module.exports=router;
