class CharacterSetProvider {
    static getLowercaseLetters() {
        return "abcdefghijklmnopqrstuvwxyz";
    }

    static getUppercaseLetters() {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    static getDigits() {
        return "1234567890";
    }

    static getSpecialCharacters() {
        return "!@#$%^&*()";
    }
}

export default CharacterSetProvider;
