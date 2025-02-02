import axios from "axios";
import { BASE_URL } from "../hooks";

export const customAxios = axios.create({
    baseURL: BASE_URL || "http://45.138.158.137:92/api"
});

customAxios.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);
