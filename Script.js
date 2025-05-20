let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)


// css element matches
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

console.log(sp1.closest(".box"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))
 
// practice set
// problem -1 change the colour of first element
let ctitle = document.getElementById("li")
 ctitle.style.color = "red"

 // problem-3 change colour of first and last element
 document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"

 document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

 // problem 4  change background of all <li> tags to cyan
 Array.from(document.getElementsByTagName("li")).forEach((element) =>{
     element.style.background = "cyan";
 })
 
// SNAKE, WATER AND GUN game problem
 let user = prompt("Enter S, W or G")
 let cpuI = Math.floor(Math.random() * 3);
 let cpu = ["S", "W", "G"][cpuI]

 const match = (cpu, user)=>{
    if(cpu == user){
        return "Nobody"
    }
    else if(cpu === "S" && user ==="W"){
        return "cpu"
    }
    else if(cpu === "S" && user==="G"){
        return "user"
    }
    else if(cpu ==="G" && user==="W"){
        return "user"
    }
    else if(cpu=="G" && user==="S"){
        return "cpu"
    }
     else if(cpu=="W" && user==="S"){
        return "user"
    }
     else if(cpu=="W" && user==="G"){
        return "cpu"
    }
 }
 let result=match(cpu, user)
 console.log('The winner is: ' + result)

// tag name/node name
 let x =document.getElementsByTagName('span')[0]
 console.log(x)
 let y = document.getElementsByTagName('span')[0]
 console.dir(x)
 console.log(document.body.firstChild.nodeName)
 console.log(document.body.firstElementChild.nodeName)

