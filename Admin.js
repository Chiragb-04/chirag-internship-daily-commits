import { User } from "./User.js";

export class Admin extends User {
    updateStudentData(newData) {
        User.setStudentData(newData);
    }
}
