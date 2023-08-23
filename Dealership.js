const Car = require("./Car");

const Dealership = function(name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
}

Dealership.prototype.getName = function (){
    return this.name
};

Dealership.prototype.getMaxCars = function (){
    return this.maxCars
};

Dealership.prototype.getCarsInStock = function (){
    return this.carsInStock
};

Dealership.prototype.setName = function (newName){
    this.name = newName;
};

Dealership.prototype.setMaxCars = function (newMaxCars){
    this.maxCars = newMaxCars;
};

Dealership.prototype.setCarsInStock = function (newCarsInStock){
    this.carsInStock = newCarsInStock;
};

Dealership.prototype.countCarsInStock = function () {
    return this.carsInStock.length;
}

Dealership.prototype.addCarToStock = function (newCar) {
        if (this.carsInStock.length < this.maxCars) {
          this.carsInStock.push(newCar);
          return true;
        } else {
          return false; 
        }
}

Dealership.prototype.getManufacturers = function () {
    return this.carsInStock.map(car => car.manufacturer);
}

Dealership.prototype.findCarsByManufacturer = (manufacturer) => {
    return this.carsInStock.filter(car => car.manufacturer === manufacturer);
}

Dealership.prototype.calculateTotalValue = () => {
    return this.carsInStock.reduce((total, car) => total + car.price, 0);
}


const StonebridgeWhips = new Dealership("Stonebridge Whips", 50)

console.log(StonebridgeWhips);

module.exports = Dealership;

