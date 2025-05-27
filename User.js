export class User {
    static #studentData = "secret information";

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewStudentData() {
        console.log(`Student Data: ${User.#studentData}`);
    }

    static getStudentData() {
        return User.#studentData;
    }

    static setStudentData(newData) {
        User.#studentData = newData;
    }
}
