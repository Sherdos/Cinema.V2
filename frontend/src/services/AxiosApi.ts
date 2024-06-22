import axios from "axios";
import { BASE_URL } from "../constants";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    Accept: "application/json",
  },
});

export default axiosApi;
