import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8081/api/form";

export const listForms = () => axios.get(REST_API_BASE_URL);

export const createIdentificationForm = (formData) => {
    return axios.post(`${REST_API_BASE_URL}`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const createPlanningPhaseForm = (formData) => {
    return axios.post(`${REST_API_BASE_URL}`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updateForm = (formId, formData) => {
    return axios.put(`${REST_API_BASE_URL}/${formId}`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};