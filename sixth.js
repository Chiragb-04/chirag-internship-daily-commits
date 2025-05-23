 import { URL } from "./URL.js";
const factDisplayElement = document.querySelector("#fact");
const fetchFactButton = document.querySelector("#btn");

// using async await
const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factDisplayElement.innerText = data.fact;
};


btn.addEventListener("click", getFacts);
