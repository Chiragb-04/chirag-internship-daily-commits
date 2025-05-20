// // already value in the'input box
// alert("Enter the value of a!")
// let a = prompt("Enter a here", "578")
// a = Number.parseInt(a)
// alert("you entered a of type " + (typeof a))
// let write = confirm("Do you want to write it to the page")
// if(write){
//     document.write(a)
// }else{
//     document.write("please allow me to write")   
// }

//  show head tag
//document.head

// create html 
//document.documentElement

console.log(document.body.firstChild) //show first child element
console.log(document.body.lastChild)  // show last child element
console.log(document.body.childNodes) // All child nodes


 a = document.body.firstChild
 console.log(a.parentNode)
 console.log(a.parentElement)