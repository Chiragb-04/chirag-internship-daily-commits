// use dictionary function
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional.",
    yakka: "works, especially hard work."
}
console.log(dict['yakka'])

// use assignment operator
let assignment = 1;
assignment +=5
console.log("a is now =", assignment)
assignment -=5
console.log("a is now =", assignment)
assignment *=5
console.log("a is now =", assignment)
assignment /=5
console.log("a is now =", assignment)

// use comparison
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1==comp2)
console.log("comp1== comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !==comp2)
console.log("comp1 > comp2 is ", comp1 > comp2) 

//Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)


// use if- else 
let a = prompt("hey whats you age?");
a = Number.parseInt(a);
if(a<0){
    alert("this is an invalid age");
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("you are a kid and you can think of driving after 18");
}
else{
    alert("you can now drive as you are above 18");
}
console.log(done)