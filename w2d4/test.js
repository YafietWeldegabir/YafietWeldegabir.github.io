describe("filter", function () {
    it("String method, returns string without the banned Words",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});