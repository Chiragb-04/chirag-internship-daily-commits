const URL = "https://catfact.ninja/fact?limit=5";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");

// using async await
const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factPara.innerText = data.fact;
};


btn.addEventListener("click", getFacts);
