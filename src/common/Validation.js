export const isString = (value, type) => {
    let errorBlock = document.getElementById(`${type}-Error`);
    if (
        value === "" ||
        value.trim().length < 3 ||
        !value.match(/^[a-zA-Z ]+$/i) ||
        value.match(/^\s/)
    ) {
        errorBlock.style.display = 'block';
        setTimeout(function () { errorBlock.style.display = 'none'; }, 5000);
    } else {
        errorBlock.style.display = 'none';
        return true;
    }
    return false;
}