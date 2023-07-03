import axios from "axios";

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user));

const BASE_URL = "https://dawn-api.onrender.com/api/";
let TOKEN = "";
TOKEN =
  localStorage.getItem("persist:root") &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser !== null
    ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken
    : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
