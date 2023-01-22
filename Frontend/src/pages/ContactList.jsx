import React, { useState, useEffect } from "react";
import styles from "./contactlist.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const ContactList = () => {
  let [contactList, setContactList] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/contacts").then((res) => {
      console.log("all Contacts", res.data);
      setContactList(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.main}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Sl.no.</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {contactList.map((e, i) => (
            <tr key={e._id}>
              <td>
                {" "}
                <Link to={`/details/${e._id}`}>{i + 1}</Link>
              </td>
              <td>
                {" "}
                <Link to={`/details/${e._id}`}>{e.firstName}</Link>
              </td>
              <td>
                {" "}
                <Link to={`/details/${e._id}`}>{e.lastName}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
