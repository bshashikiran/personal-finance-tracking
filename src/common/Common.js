export const showErrorMsg = (fieldName, errorMsg) => {
    let element = document.getElementById(fieldName + '-Error');
    element.style.display = 'block';
    element.innerText = errorMsg;
    document.getElementById(fieldName).focus();
    setTimeout(function() {
        element.style.display = 'none';
    }, 3500);
}