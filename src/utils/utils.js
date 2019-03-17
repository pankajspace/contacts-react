export const validateEmail = (email) => {
    let regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

