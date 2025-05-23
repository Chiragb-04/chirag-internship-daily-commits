import { API_URL, countryList } from "./code.js";

const currencyDropdowns = document.querySelectorAll(".dropdown select");


for (let select of currencyDropdowns) {
    for (let currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currencyCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}