import { Person } from "./Person.js";


export class Doctor extends Person {
    work() {
        console.log("treating patients");
    }
}
