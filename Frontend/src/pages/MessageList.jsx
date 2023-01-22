import React from "react";
import styles from "./contactlist.module.css";

export const MessageList = () => {
    return <div className={styles.main}>

    <table className={styles.table}>
        <thead className={styles.thead} >
            <tr>
                <th>
                    Sl.no.
                </th>
                <th>
                   First Name
                </th>
                <th>
                    Last Name
                </th>
            </tr>
        </thead>
        <tbody className={styles.tbody}>
        <tr>
                <td>
                    Sl.no.
                </td>
                <td>
                   First Name
                </td>
                <td>
                    Last Name
                </td>
            </tr>

        </tbody>
    </table>
  </div>;
};
