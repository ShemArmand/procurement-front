import axios from "axios";

const REST_API_BASE_URL="http://localhost:8081/api/form";

export const listForms =() => axios.get(REST_API_BASE_URL);

export const createForm =(form) => axios.post(REST_API_BASE_URL);

export const updatedForm =(form) => axios.put(REST_API_BASE_URL);