import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

export const https = axios.create({
  //baseURL là đoạn url sử dụng chung của tất cả các request
  baseURL: "https://airbnbnew.cybersoft.edu.vn",
  //timeout sẽ giúp ngưng gọi dữ liệu khi quá thời gian
  timeout: 15000,
  headers: {
    TokenCyberSoft: token,
    token: `${
      JSON.parse(localStorage.getItem("user_info"))?.token ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5ODgiLCJlbWFpbCI6Imh1aHVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJuYmYiOjE3MDU5MDQ0NjgsImV4cCI6MTcwNjUwOTI2OH0.9jPPOUrgxu0DiJPPuO41-l89fZK3igh5gNnx8HfQCH8"
    }`,
  },
});
