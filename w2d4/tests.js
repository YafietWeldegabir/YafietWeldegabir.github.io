/*1*/
describe("filter", function () {
    it("String method, returns string without the banned Words",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});

describe("filter", function () {
    it("String method, returns string without the banned Words",
        function () {
            assert.equal("Yafiet is not eritrean!".filter('not'), "Yafiet is eritrean!");
        });
});

/*2*/
describe("fbubbleSortilter", function () {
    it("Array method, returns the Array Sorted",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(), [-2, 0, 1, 3, 4, 6].toString());
        });
});

