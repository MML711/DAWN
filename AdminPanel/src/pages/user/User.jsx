import React from "react";
import styles from "./user.module.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userTitleContainer}>
        <h1>Edit User</h1>
        <Link to="/newUser">
          <button className={styles.userAddButton}>Create</button>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.userShowTopImg}
            />
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowUserName}>Danny Walker</span>
              <span className={styles.userShowUserTitle}>
                Software Engineer
              </span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>dannywalk88@</span>
            </div>
            <div className={styles.userShowInfo}>
              <CalendarToday className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>04.21.2000</span>
            </div>
            <span className={styles.userShowTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <PhoneAndroid className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>+44 123 456 67</span>
            </div>
            <div className={styles.userShowInfo}>
              <MailOutline className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>
                dannywalk88@gmail.com
              </span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationSearching className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>London | UK</span>
            </div>
          </div>
        </div>
        <div className={styles.userUpdaate}>
          <span className={styles.userUpdateTitle}>Edit</span>
          <form className={styles.userUpdateForm}>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="dannywalk88"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Danny Walker"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="dannywalk88@gmail.com"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+44 123 456 67"
                  className={styles.userUpdateInput}
                />
              </div>
              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="London | UK"
                  className={styles.userUpdateInput}
                />
              </div>
            </div>
            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img
                  className={styles.userUpdateImg}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={styles.userUpdateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={styles.userUpdateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
