import {
    Engineer,
    Doctor,
    User,
    Admin,
    Calculator
} from './classes.js';

const chirag = new Engineer();
const Abhinav = new Doctor();

chirag.work();
Abhinav.work();


const student1 = new User("Chirag", "chiragb849@gmail.com");
const student2 = new User("Vaibhav", "vaibhavb65@gmail.com");
student1.viewStudentData();


const admin = new Admin("Admin", "admin@gmail.com");
admin.updateStudentData("Updated secret info");

student2.viewStudentData(); // Will show updated data

const calculator = new Calculator(5, 10);
calculator.showAllOperations();
