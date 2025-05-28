export class Calculator {
    constructor(firstNumber, secondNumber, thirdNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.thirdNumber = thirdNumber;
    }

    showAllOperations() {
        console.log(`FirstNumber = ${this.firstNumber}`);
        console.log(`SecondNumber = ${this.secondNumber}`);

        this.safeSubtract(); // Subtraction may involve undefined input

        console.log(`Addition = ${this.firstNumber + this.secondNumber}`);
        console.log(`Multiplication = ${this.firstNumber * this.secondNumber}`);
    }

    safeSubtract() {
        try {
            console.log(`Subtraction = ${this.firstNumber - this.thirdNumber}`);
        } catch (error) {
            console.error("Subtraction Error:", error.message);
        }
    }
}
