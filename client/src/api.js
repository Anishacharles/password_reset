import axios from "axios";

//set the base URL for axios

const api = axios.create({
    baseURL: "http://localhost:5000/api"
})

export default api;


