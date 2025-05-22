// get attribute method
let a = first.getAttribute("class")
console.log(a)

// has attribute method
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

//set attribute
first.setAttribute("hidden", "true")

//remove attribute
first.removeAttribute("class")

//dataset
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)

let b = document.getElementsByTagName('div')[1]
b.innerHTML = b.innerHTML + '<h1>chirag Bansal</h1>';

first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');

first.className = "text-black red"
first.classList.add("red")

//setTimeout 
document.write("hello")
let c = setTimeout(function () {
    alert("I am inside of settimeout")
}, 5000)
let d = prompt("D0 you want to run the settimeout?")
if ("n" == d) {
    clearTimeout(c)
}
console.log(c)

document.write("Bansal")
const sum = (e, f) => {
    console.log("yes I am running" + (e + f))
    e + f
}
setTimeout(sum, 1000, 1, 2)

// set interval function
// setInterval(function(){ 
//     alert("setinterval")
// }, 3000)

let g = new Date()
let h = g.getHours()   // to show the time hours
let m = g.getMinutes() // to show the minutes
let s = g.getSeconds() // to show the seconds
let k = g.setDate()  // to show the date 
console.log(h, m, s, k)

// Syncronous Programming 
let i = prompt("what is your name?");
let j = prompt("what is your age?");
let l = prompt("what is your favourite color?");
console.log(i + "is" + j + "years old and has" + l + "favourite color.");


//Asyncronous programming
console.log("Start")
setTimeout(function () {
    console.log("Hey I am good");
}, 3000)
console.log("End")

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 4000);
}

//callback hell
getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4);
        });
    });
})


let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
});

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
            //  reject("error")
            if (getNextData) {
                getNextData();
            }
        }, 10000);
    });
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000)
    });
}

// Async-await 
async function getWeatherData() {
    await api();
    await api();
}


// Error Handling: try and catch
setTimeout(() => {
    console.log("Hacking wifi.... Please wait....")
}, 1000)

try {
    setTimeout(() => {   // handle the error if try catch block in inner part
        try {
            console.log(chirag)
        } catch (error) {

        }
    }, 100)
}
catch (error) {
    console.log("error is coming")
}

setTimeout(() => {
    console.log("Fetching username and password... Please wait...")

}, 2000)

setTimeout(() => {
    console.log("Hacking vaibhav's facebook id... Please wait...")
}, 3000)

setTimeout(() => {
    console.log("Username and password of chirag (+919395954598) fetched... Please wait...")
}, 4000)


let btn1 = document.querySelector("#btn1")

