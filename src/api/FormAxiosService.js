import axios from "axios";

const PATH = "http://localhost:8080/personalfinancetrackingapi/";

export const getPersonalDetails = async (mobile) => {
    const result = await axios.get(PATH + "user/getPersonalData?mobile=" + mobile);
    return result.data;
}