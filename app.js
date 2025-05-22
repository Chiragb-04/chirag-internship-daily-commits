const API_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json"

const dropdowns = document.querySelectorAll(".dropdown select");


for(let select of dropdowns) {
    for (currencyCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === "from" && currencyCode === "USD") {
            newOption.selected="selected";
        }else if (select.name === "to" && currencyCode === "INR") {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
}

