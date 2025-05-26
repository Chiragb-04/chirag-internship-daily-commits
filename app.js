import { API_URL, countryList, getFlagUrl } from "./code.js";

// DOM Elements
const currencyDropdowns = document.querySelectorAll(".dropdown select");
const exchangeRateButton = document.getElementById("get-rate-button");
const fromCurrencySelect = document.querySelector(".from select");
const toCurrencySelect = document.querySelector(".to select");
const exchangeMessage = document.querySelector("#exchange-message");
const amountInput = document.querySelector(".amount input");

// 1. Populate dropdowns and set default selections
function populateCurrencyDropdowns() {
    currencyDropdowns.forEach((dropdown) => {
        for (const currencyCode in countryList) {
            const option = document.createElement("option");
            option.value = currencyCode;
            option.innerText = currencyCode;

            if (dropdown.name === "from" && currencyCode === "USD") {
                option.selected = true;
            } else if (dropdown.name === "to" && currencyCode === "INR") {
                option.selected = true;
            }

            dropdown.append(option);
        }

        dropdown.addEventListener("change", (event) => {
            updateCountryFlag(event.target);
        });
    });
}

// 2. Update flag based on selected currency
function updateCountryFlag(selectElement) {
    const selectedCurrency = selectElement.value;
    const countryCode = countryList[selectedCurrency];
    const flagImage = selectElement.parentElement.querySelector("img");

    if (countryCode && flagImage) {
        flagImage.src = getFlagUrl(countryCode);
    }
}

// 3. Setup exchange button handler
function setupExchangeRateHandler() {
    exchangeRateButton.addEventListener("click", (event) => {
        event.preventDefault();
        handleExchangeRate();
    });
}

// 4. Handle conversion logic
async function handleExchangeRate() {
    let amountValue = amountInput.value.trim();
    if (!amountValue || isNaN(amountValue) || Number(amountValue) < 1) {
        amountValue = "1";
        amountInput.value = amountValue;
    }

    const fromCurrency = fromCurrencySelect.value.toLowerCase();
    const toCurrency = toCurrencySelect.value.toLowerCase();

    try {
        const rate = await fetchExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = (amountValue * rate).toFixed(2);
        exchangeMessage.innerText = `${amountValue} ${fromCurrencySelect.value} = ${convertedAmount} ${toCurrencySelect.value}`;
        console.log(exchangeMessage.innerText)
    } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
        exchangeMessage.innerText = "Exchange rate unavailable.";
    }
}

// 5. Fetch exchange rate from API
async function fetchExchangeRate(fromCurrency, toCurrency) {
    const url = `${API_URL}/${fromCurrency}.json`;
    const response = await fetch(url);
    const data = await response.json();
    return data[fromCurrency][toCurrency];
}

// 6. Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    populateCurrencyDropdowns();
    setupExchangeRateHandler();
});
