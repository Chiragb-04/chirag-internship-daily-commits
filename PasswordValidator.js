class PasswordValidator {
    static isValidLength(length) {
        if (typeof length !== "number" || isNaN(length)) {
            throw new Error("Password length must be a valid number.");
        }
        if (length < 6) {
            throw new Error("Password should be at least 6 characters long.");
        }
        return true;
    }
}

export default PasswordValidator;
