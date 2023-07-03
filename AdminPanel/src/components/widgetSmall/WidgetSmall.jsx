import React, { useEffect, useState } from "react";
import styles from "./widgetSmall.module.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {}
    };
    getUser();
  }, []);

  return (
    <div className={styles.widgetSmall}>
      <span className={styles.widgetSmallTitle}>New Joining Members</span>
      <ul className={styles.widgetSmallList}>
        {users.map((user) => (
          <li className={styles.widgetSmallListItem} key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className={styles.widgetSmallImg}
            />
            <div className={styles.widgetSmallUser}>
              <span className={styles.widgetSmallUsername}>
                {user.username}
              </span>
            </div>
            <button className={styles.widgetSmallButton}>
              <Visibility className={styles.widgetSmallIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
