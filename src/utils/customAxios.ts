import axios from "axios";
import { BASE_URL } from "../hooks";

export const customAxios = axios.create({
    baseURL: BASE_URL
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
