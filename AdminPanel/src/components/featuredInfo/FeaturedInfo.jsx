import React, { useEffect, useState } from "react";
import styles from "./featuredInfo.module.css";
import "./featuredInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Reavenu</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>${income[1] ? income[1].total : 0}</span>
          <span className={styles.featuredMoneyRate}>
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className={styles.featuredIconNegative} />
            ) : (
              <ArrowUpward className={styles.featuredIcon} />
            )}
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Sales</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$1,509</span>
          <span className={styles.featuredMoneyRate}>
            -2.3 <ArrowDownward className={styles.featuredIconNegative} />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Cost</span>
        <div className={styles.featuredMoneyContainer}>
          <span className={styles.featuredMoney}>$3,845</span>
          <span className={styles.featuredMoneyRate}>
            +4 <ArrowUpward className={styles.featuredIcon} />
          </span>
        </div>
        <span className={styles.featuredSub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
