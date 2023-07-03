import React, { useEffect, useMemo, useState } from "react";
import styles from "./product.module.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className={styles.product}>
      <div className={styles.productTitleContainer}>
        <h1 className={styles.productTitle}>Product</h1>
        <Link to="/newproduct">
          <button className={styles.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={styles.productTop}>
        <div className={styles.productTopLeft}>
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className={styles.productTopRight}>
          <div className={styles.productInfoTop}>
            <img
              src={product.img}
              alt=""
              className={styles.productInfoImg}
            />
            <span className={styles.productName}>{product.title}</span>
          </div>
          <div className={styles.productInfoBottom}>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>id:</span>
              <span className={styles.productInfoValue}>{product._id}</span>
            </div>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>sales:</span>
              <span className={styles.productInfoValue}>5123</span>
            </div>
            <div className={styles.productInfoItem}>
              <span className={styles.productInfoKey}>in stock:</span>
              <span className={styles.productInfoValue}>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productBottom}>
        <form className={styles.productForm}>
          <div className={styles.productFormLeft}>
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="falsee">No</option>
            </select>
          </div>
          <div className={styles.productFormRight}>
            <div className={styles.productUpload}>
              <img
                src={product.img}
                alt=""
                className={styles.productUploadImg}
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className={styles.productButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
