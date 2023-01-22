import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./contactinfo.module.css";
import { Compose } from "./Compose";

export const ContactInfo = () => {
  const [composeView,setComposeView]=useState(false)
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/contacts/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.main}>
      <h1>Contact Details</h1>

      <div className={styles.label}>Contact Name</div>
      <div
        className={styles.content}
      >{`${data?.firstName} ${data?.lastName}`}</div>
      <div className={styles.label}>Contact Number</div>
      <div className={styles.content}>{data?.phone}</div>
      <button className={styles.button} onClick={()=>setComposeView(!composeView)}>Send Message</button>
     { composeView && <Compose setComposeView={setComposeView} composeView={composeView} data={data}></Compose>}
    </div>
  );
};
