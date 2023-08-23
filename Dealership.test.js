const Dealership = require("./Dealership");

const Car = require('./Car');


let StonebridgeWhips; 

beforeEach(() => {
StonebridgeWhips = new Dealership("Stonebridge Whips", 50)

}); 

describe('getters', () => {

    test('get name', () => {
        expected = "Stonebridge Whips";
        actual = StonebridgeWhips.getName();
        expect(actual).toBe(expected);
    });
    
    test('get max number of cars', () => {
        expected = 50;
        actual = StonebridgeWhips.getMaxCars();
        expect(actual).toBe(expected);
    });

    test('get cars in stock', () => {
        expected = StonebridgeWhips.carsInStock;
        actual = StonebridgeWhips.getCarsInStock();
        expect(actual).toBe(expected);
    });
})

describe('setters', () => {

    test('set name', () => {
        StonebridgeWhips.setName("Harlesden Hotrods")
        expected = "Harlesden Hotrods";
        actual = StonebridgeWhips.getName();
        expect(actual).toBe(expected);
    });
    
    test('set max number of cars', () => {
        StonebridgeWhips.setMaxCars(60)
        expected = 60;
        actual = StonebridgeWhips.getMaxCars();
        expect(actual).toBe(expected);
    });

    test('set cars in stock', () => {
        const car1 = new Car('Toyota', 25000, 'petrol');
        const car2 = new Car('Honda', 30000, 'electric');

   
        StonebridgeWhips.carsInStock = [car1, car2];

        expected =  expect(StonebridgeWhips.carsInStock[0]).toBe(car1);
                    expect(StonebridgeWhips.carsInStock[1]).toBe(car2);
        
    });
})

describe('count cars in stock', () => {

    test('count number of cars in stock', () => {
        expected = 0;
        actual = StonebridgeWhips.countCarsInStock();
        expect(actual).toBe(expected);
    });
});
