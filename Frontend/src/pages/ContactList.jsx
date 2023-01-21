import React from "react";
import styles from "./contactlist.module.css"
export const ContactList = () => {
  return <div className={styles.main}>

    <table>
        <thead>
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
        <tbody>

        </tbody>
    </table>
  </div>;
};
