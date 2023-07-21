// Function to create a car object
function createCar(brand, model, year, color, price, gas) {
    return {
        brand,
        model,
        year,
        color,
        price,
        gas,
        honk() {
            console.log("Tuut tuut");
            console.log("Brand:", this.brand);
            console.log("Model:", this.model);
            console.log("Year:", this.year);
            console.log("Color:", this.color);
            console.log("Price:", this.price);
            console.log("\n");
        }
    };
}

// Create car objects
const cars = [
    createCar("Honda", "CR-V", 2023, "Red", 50000, 45),
    createCar("Ford", "F-150", 2020, "Black", 25000, 30),
    createCar("BMW", "X5", 2022, "Green", 60000, 65),
    createCar("Mazda", "CX-5", 2019, "White", 15000, 60),
    createCar("Audi", "Q7", 2018, "Silver", 52000, 47),
    createCar("Kia", "Forte", 2020, "Blue", 21000, 56),
];

// Invoke the honk method for each instance of the car
for (const car of cars) {
    car.honk();
}

// Race between cars for 7 turn
let outputDiv = document.getElementById("output");
let raceResult = "";
for (let turn = 1; turn <= 7; turn++) {
    raceResult += `<h2>Turn ${turn}</h2>`;
    for (const car of cars) {
        const gasLoss = (car.year === new Date().getFullYear()) ? 5 : (5 + (new Date().getFullYear() - car.year));
        car.gas -= gasLoss;
        raceResult += `<p>${car.brand} ${car.model} - Gas left: ${car.gas} liters</p>`;
    }
    outputDiv.innerHTML = raceResult;
}
