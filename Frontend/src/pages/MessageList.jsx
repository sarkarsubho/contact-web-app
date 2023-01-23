import React from "react";
import styles from "./contactlist.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("https://weary-wasp-clothes.cyclic.app/message").then((res) => {
      console.log(res.data);
      let data = res.data.sort((a, b) => b.time - a.time);
      setMessages(data);
    });
  }, []);

  return (
    <div className={styles.main}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Sl.no.</th>
            <th> Name</th>
            <th>Time</th>
            <th>OTP</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {messages.map((element, index) => {
            return (
              <tr key={element._id}>
                <td>{index + 1}</td>
                <td>
                  {element.firstName} {element.lastName}
                </td>
                <td>{new Date(element.time).toDateString()}</td>
                <td>{element.otp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
