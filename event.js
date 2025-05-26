const logClickButton = document.querySelector("#clickbutton");

// Click Event Handlers
logClickButton.addEventListener("click", (event) => {
    logClickEventDetails(event);
});

// Event Logger Function
function logClickEventDetails(event) {
    console.log("Button clicked - handler1");
    console.log(event);
    console.log(event.type);
}
// Click Event Handlers
logClickButton.addEventListener("click", () => {
    console.log("Button clicked - handler2");
});

const logHandler3Click = () => {
    console.log("Button clicked - handler3")
}

logClickButton.addEventListener("click", logHandler3Click);

logClickButton.addEventListener("click", () => {
    console.log("Button clicked - handler4");
});

// Remove handler3
logClickButton.removeEventListener("click", logHandler3Click);



// practice problem = Theme Toggle Functionality
const toggleThemeButton = document.querySelector("#mode");
let currentTheme = "Light"; //dark

toggleThemeButton.addEventListener("click", () => {
    toggleTheme();
});

function toggleTheme() {
    const isLightTheme = currentTheme === "Light";
    currentTheme = isLightTheme ? "dark" : "Light";

    const bodyElement = document.querySelector("body");
    bodyElement.style.backgroundColor = isLightTheme ? "black" : "white";

    console.log(`Current theme: ${currentTheme}`);
}


// Car Class Definitions
class ToyotaCar {
    start() {
        console.log("Car Started");
    }

    stop() {
        console.log("Car stopped");
    }

    setBrand(brandName) {
        this.brandName = brandName;
    }
}

//Car Object Initialization
const fortunerCar = new ToyotaCar();
fortunerCar.setBrand("fortuner");
const lexusCar = new ToyotaCar();
lexusCar.setBrand("lexus");
