import axios from "axios";

const baseApi = axios.create({
	baseURL: "http://localhost:3000/api/",
});

export default baseApi;
