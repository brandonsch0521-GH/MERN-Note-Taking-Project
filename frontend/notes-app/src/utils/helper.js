export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // this is space sensitive, so don't ad
    return regex.test(email);
};