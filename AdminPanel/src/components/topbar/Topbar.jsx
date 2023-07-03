import React from "react";
import styles from "./topbar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className="topLeft">
          <span className={styles.logo}>Admin Panel</span>
        </div>
        <div className={styles.topRight}>
          <button
            className={styles.logoutButton}
            onClick={() => {
              localStorage.removeItem("persist:root");
              navigate("/login");
            }}
          >
            Logout
          </button>
          <div className={styles.topbarIconContainer}>
            <NotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Language />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Settings />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Jake_Sully.jpg/200px-Jake_Sully.jpg"
            alt=""
            className={styles.topAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
