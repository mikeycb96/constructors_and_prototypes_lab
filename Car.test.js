const Car = require("./Car");


let TypeR; 

beforeEach(() => {
    TypeR = new Car("Honda", 6000, "petrol")
}) 

describe('getters', () => {

    test('get manufacturer', () => {
        expected = "Honda";
        actual = TypeR.getManufacturer();
        expect(actual).toBe(expected);
    });
    
    test('get price', () => {
        expected = 6000;
        actual = TypeR.getPrice();
        expect(actual).toBe(expected);
    });

    test('get engine type', () => {
        expected = "petrol";
        actual = TypeR.getEngineType();
        expect(actual).toBe(expected);
    });
})

describe('setters', () => {

    test('set manufacturer', () => {
        TypeR.setManufacturer("Nissan")
        expected = "Nissan";
        actual = TypeR.getManufacturer();
        expect(actual).toBe(expected);
    });
    
    test('set price', () => {
        TypeR.setPrice(7000)
        expected = 7000;
        actual = TypeR.getPrice();
        expect(actual).toBe(expected);
    });

    test('set engine type', () => {
        TypeR.setEngineType
        expected = "petrol";
        actual = TypeR.getEngineType();
        expect(actual).toBe(expected);
    });
})
