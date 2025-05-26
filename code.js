// Country list mapping currency codes to ISO country codes
export const countryList = {
    AED: "AE", // United Arab Emirates Dirham
    AFN: "AF", // Afghan Afghani
    XCD: "AG", // East Caribbean Dollar
    ALL: "AL", // Albanian Lek
    AMD: "AM", // Armenian Dram
    ANG: "AN", // Netherlands Antillean Guilder
    AUD: "AU", // Australian Dollar
    INR: "IN", // Indian Rupee
    JPY: "JP", // Japanese Yen
    USD: "US", // US Dollar
        // Add more as needed
};

// API URL for currency exchange API
export const API_URL = "https://latest.currency-api.pages.dev/v1/currencies";

// flag URL for flag image exchange
export function getFlagUrl(countryCode) {
    return `https://flagsapi.com/${countryCode}/flat/64.png`;
}

