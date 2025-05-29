import PasswordGenerator from `./PasswordGenerator.js`;

const generator = new PasswordGenerator();

try {
    const password = generator.generate(7); // example invalid input
    if (password) {
        console.log("Generated Password:", password);
    }
} catch (error) {
    // Provide clear feedback to the user
    console.error("Password generation failed:", err.message);
    alert(`Error: ${error.message}`); // Optional: If in browser
}
