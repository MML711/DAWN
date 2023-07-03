import React, { useEffect, useState } from "react";
import styles from "./widgetLarge.module.css";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (err) {}
    };
    getOrder();
  }, []);

  const Button = ({ type }) => {
    return (
      <button className={styles["widgetLargeButton" + type]}>{type}</button>
    );
  };

  return (
    <div className={styles.widgetLarge}>
      <h3 className={styles.widgetLargeTitle}>Latest transactions</h3>
      <table className={styles.widgetLargeTable}>
        <tr className={styles.widgetLargeTr}>
          <th className={styles.widgetLargeTh}>Customer</th>
          <th className={styles.widgetLargeTh}>Date</th>
          <th className={styles.widgetLargeTh}>Amount</th>
          <th className={styles.widgetLargeTh}>Status</th>
        </tr>
        {orders.map((order) => (
          <tr className={styles.widgetLargeTr} key={order._id}>
            <td className={styles.widgetLargeUser}>
              <span className={styles.widgetLargeName}>{order.userId}</span>
            </td>
            <td className={styles.widgetLargeDate}>
              {format(order.createdAt)}
            </td>
            <td className={styles.widgetLargeAmount}>${order.amount}</td>
            <td className={styles.widgetLargeStatus}>
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLarge;
