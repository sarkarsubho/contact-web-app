import React from "react";
import styles from "./compose.module.css";
import { useState } from "react";
import axios from "axios";

export const Compose = ({ data, setComposeView, composeView }) => {
  let generateOTP = (otp_length) => {
    // Declare a digits variable
    // which stores all digits
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otp_length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };
  const [message, setmessage] = useState(
    `Hi. Your OTP is: ${generateOTP(6)} .`
  );

  const handleSubmit = () => {
    let otpStr = message.trim().split(" ");
    let payload = {
      userId: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      time: Date.now(),
      otp: otpStr[otpStr.length - 2],
      message,
    };
    axios
      .post("https://weary-wasp-clothes.cyclic.app/message", payload)
      .then((res) => {
        alert("Message Sent.");
        setComposeView(!composeView);
      })
      .catch((er) => {
        console.log("error", er.response);
        alert(er.response.data);
        setComposeView(!composeView);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputBox}>
        <div className={styles.cancelbtn}>
          <button onClick={() => setComposeView(!composeView)}>X</button>
        </div>
        <h3>Message</h3>
        <input type="text" className={styles.input} value={message} />
        <button className={styles.button} onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};
