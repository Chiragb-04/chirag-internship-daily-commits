// use if else statement
let age = prompt("What is your age?")
if(age>10 && age<20){
    console.log("you age lies between 10 and 20")
}
else{
    console.log("your age doesnt lies between 10 and 20")
}


// use switch case
let age = prompt("what is your age?")
switch(age){
    case '12':
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    default:
        console.log("you age is not special")
}  



// let num = prompt("What is your age?")
// num = Number.parseInt(num)
// if(num % 2 == 0 && num % 3 ==0){
//     console.log("your number is divisible by 2 and 3")
// }
// else{
//     console.log("your number is not divisible by 2 and 3")
// }


let age = 16
let b = age > 18 ? "you can drive" : "you cannot drive"
console.log(b)

// find length of string
let str1 = "Har\""
console.log(str1.length)

// to change lowercase and upper case
const word = 'fox2';
console.log(word.toLowerCase())
console.log(word.toUpperCase())


// print array value
let marks_class_12 = [91, 32, 45, 57, false, "Not Pesent", null]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12.length)
marks_class_12[7] = 98  // add new value
marks_class_12[0] = 96  // update array value
console.log(marks_class_12)

// trim whitespaces
let name = "  chirag  "
console.log(name)
let newName = name.trim()
console.log(newName)

//merge the all 
let name1 = "hary"
let name2 = "chirag"
let name3 = name1.concat(name2, "yes")
console.log(name3)


let str = "hello";
let arr = str.split("");  // Convert string to array
arr.push("!");             // Push character
str = arr.join("");        // Convert array back to string
console.log(str);

// sorting 
let a = [7, 9, 8]
a.sort()
console.log(a)

// delete an array value
let number = [1, 2, 3, 4, 5, 6, 7, 8]
delete number[2]
console.log(number)

// merge all array value
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
let newArray = a1.concat(a2, a3)
console.log(newArray)

// sort ascending
let compare = (a, b) => {
    return a - b
}
let number1 = [43, 23, 12, 25, 76, 54, 44, 55, 88, 78, 42, 9]
number1.sort(compare)
console.log(number1)

// update the value at what position
let number2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
number2.splice(3, 3, 1021, 1022, 1023, 1024)
console.log(number2)
number2.reverse()   // reverse the array value
console.log(number2)

// cut the value from 3-6 no of indexing value in array
let number3 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newNumber3 = number3.slice(3, 6)
console.log(newNumber3)


let number4 = [3, 5, 1, 2, 4]
// for(let i=0;i<number4.length;i++){
//     console.log(number4[i])
// }

number4.forEach((element)=>{
    console.log(element*element)
})

//sum of aaray value
const n = [1,8,7,11]
const add = (a,b)=> a+b;
let sum = n.reduce(add)
console.log(sum)


// use for loop
let name6 = "chirag";
let arr1 = Array.from(name6);
console.log(arr1);

for (let item of number4){
    console.log(item)
}

for(let i in num){
    console.log(num[i])
}


// write on a page
alert("Enter the value of e!")
let e = prompt("Enter a here")
document.write(e)

