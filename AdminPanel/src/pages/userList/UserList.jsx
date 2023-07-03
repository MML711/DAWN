import React, { Fragment, useState } from "react";
import styles from "./userList.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

const UserList = () => {
  const [data, setData] = useState(userRows);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const res = await userRequest.get("users");
        setData(res.data);
      } catch (err) {}
    };
    getAllUser();
  }, []);
 
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.userListUser}>
            <img
              className={styles.userListImg}
              src={params.row.avatar || "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={"/user/" + params.row.id}>
              <button className={styles.userListButton}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className={styles.userList}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId ={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
