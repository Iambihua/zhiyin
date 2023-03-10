import axios from "axios";
const service = axios.create({
  baseURL: "https://music-24792-6-1302631215.sh.run.tcloudbase.com/",
  timeout: 10000,
});
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
service.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
