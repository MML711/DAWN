import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import styles from "./app.module.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { Fragment } from "react";

const App = () => {
  const admin =
    localStorage.getItem("persist:root") &&
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      ?.currentUser?.isAdmin;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
              exact
              path="/"
              element={admin ? <WrappingComponent WrappedComponent={<Home />} /> : <Navigate to="/login" replace /> }
            />
        {admin && (
          <Fragment>
            <Route
              path="/users"
              element={<WrappingComponent WrappedComponent={<UserList />} />}
            />
            <Route
              path="/user/:userId"
              element={<WrappingComponent WrappedComponent={<User />} />}
            />
            <Route
              path="/newUser"
              element={<WrappingComponent WrappedComponent={<NewUser />} />}
            />
            <Route
              path="/products"
              element={<WrappingComponent WrappedComponent={<ProductList />} />}
            />
            <Route
              path="/product/:productId"
              element={<WrappingComponent WrappedComponent={<Product />} />}
            />
            <Route
              path="/newproduct"
              element={<WrappingComponent WrappedComponent={<NewProduct />} />}
            />
          </Fragment>
        )}
      </Routes>
    </Router>
  );
};

export default App;

const WrappingComponent = ({ WrappedComponent }) => {
  return (
    <Fragment>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        {WrappedComponent}
      </div>
    </Fragment>
  );
};
