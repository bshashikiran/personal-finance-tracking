import axios from "axios";

const API_BASE_URL = "http://localhost:8080/personalfinancetrackingapi/";

export const authenticateUser = async (inputData) => {
    const result = await axios.post(API_BASE_URL + "user/authenticateUser", inputData); 
    return result.data;
}

export const saveUser = async (inputData) => {
    const result = await axios.post(API_BASE_URL + "user/saveUser", inputData); 
    return result.data;
}

export const getPersonalDetails = async (mobile) => {
    const result = await axios.get(API_BASE_URL + "user/getPersonalData?mobile=" + mobile);
    return result.data;
}