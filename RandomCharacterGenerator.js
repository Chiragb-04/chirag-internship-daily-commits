class RandomCharacterGenerator {
    static getRandomChar(characters) {
        const index = Math.floor(Math.random() * characters.length);
        return characters.charAt(index);
    }
}

export default RandomCharacterGenerator;
