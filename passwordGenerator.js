import CharacterSetProvider from "./CharacterSetProvider.js";
import PasswordValidator from "./PasswordValidator.js";
import RandomCharacterGenerator from "./RandomCharacterGenerator.js";

class PasswordGenerator {
    constructor() {
        console.log("Welcome to Password Generator");
        this.password = "";
    }

    generate(length) {
        PasswordValidator.isValidLength(length);

        const lowerCaseLetters = CharacterSetProvider.getLowercaseLetters();
        const upperCaseLetters = CharacterSetProvider.getUppercaseLetters();
        const digits = CharacterSetProvider.getDigits();
        const specialsCharacters = CharacterSetProvider.getSpecialCharacters();
        const allCharacters = lowerCaseLetters + upperCaseLetters + digits + specialsCharacters;

        this.password = "";

        this.password += RandomCharacterGenerator.getRandomChar(lowerCaseLetters);
        this.password += RandomCharacterGenerator.getRandomChar(upperCaseLetters);
        this.password += RandomCharacterGenerator.getRandomChar(digits);
        this.password += RandomCharacterGenerator.getRandomChar(specialsCharacters);

        for (let i = this.password.length; i < length; i++) {
            this.password += RandomCharacterGenerator.getRandomChar(allCharacters);
        }

        this.password = this.shuffle(this.password);

        return this.password;
    }
    shuffle(str) {
        return str.split('').sort(() => Math.random() - 0.5).join('');
    }
}

export default PasswordGenerator;
