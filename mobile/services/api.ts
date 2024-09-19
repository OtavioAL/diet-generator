import axios from "axios";
import { API_URL } from "@env";

export const api = axios.create({
  baseURL: API_URL ?? "http://192.168.3.115:8080",
});
