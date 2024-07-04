import axios from "axios";

const API_BASE_URL = "http://localhost:8080/personalfinancetrackingapi/";

export const getPersonalDetails = async (mobile) => {
    const result = await axios.get(API_BASE_URL + "user/getPersonalData?mobile=" + mobile);
    return result.data;
}