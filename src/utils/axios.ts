import axios from "axios";
// import { Cookies } from "react-cookie";
const MT_API_URL = import.meta.env.VITE_MT_API_URL;
// const cookie = new Cookies();

const instance = axios.create({
    baseURL: MT_API_URL,
    headers: {
        "Content-type": "application/json",
    },
});
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("thesis_token")
    config.withCredentials = false;
    config.headers.Authorization = "Bearer " + token
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.href = "/login"
            localStorage.removeItem("thesis_token")
        }
        return Promise.reject(error);
    }
);

export default instance;
