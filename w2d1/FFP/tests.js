let numbers=[1,2,3,4,5];
describe("sum", function () {
    describe("Given an array of elemnet of numbers ", function () {
        it("returns the sum", function () {
                assert.equal(sum(numbers),15);
            });
});
});

describe("multiply", function () {
    describe("Given an array of elemnet of numbers ", function () {
        it("returns the proudct", function () {
                assert.equal(120,multiply(numbers));
            });
});
});
let name = "yafiet"
describe("reverse", function () {
    describe("Given a string arguement ", function () {
        it("returns the reverse of the of string", function () {
                assert.equal('teifay',reverse(name));
            });
});
});
let countries=["us","mexico","Eritrea"];

describe("filterLongWords", function () {
    describe("Given an array and a number arguements ", function () {
        it("returns the array elements which are longer length than the number", function () {
                assert.deepEqual(['Eritrea'],filterLongWords(countries,6));
            });
});
});

