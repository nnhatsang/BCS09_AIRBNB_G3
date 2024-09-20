import axios from "axios";
import { getLocalStore } from "../user/api/localUser";

const tokenUser = getLocalStore("user_info");
const token = tokenUser ? tokenUser.token : null;

export const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn",

  timeout: 15000,
  headers: {
    TokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBDeWJlclNvZnQiLCJIZXRIYW5TdHJpbmciOiIwNC8xMC8yMDM0IiwiSGV0SGFuVGltZSI6IjIwNDM1MzI4MDAwMDAiLCJuYmYiOjE5NTY1MDI4MDAsImV4cCI6MjA0MzY4MDQwMH0.z_jMW7ae1X1gIgL_ePE8et6ts5HNKNoWcpBd8jj-b_A",
    token: token || "",
  },
});
