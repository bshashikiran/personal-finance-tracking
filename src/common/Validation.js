import { showErrorMsg } from "./Common";

export const validateString = (value, fieldName, errorMsg) => {
    let errorBlock = document.getElementById(`${fieldName}-Error`);
    if (value === "") {
        showErrorMsg(fieldName, errorMsg);
    } else {
        errorBlock.style.display = 'none';
        return true;
    }
    return false;
}