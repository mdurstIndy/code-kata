describe("Add", function() {
  it("should return 0 for an empty string input", function() {
    var result = Add("");
    expect(result).toEqual(0);
    });
  it("should return the number for a number input", function() {
    var result = Add('1');
    expect(result).toEqual(1);
    });
  it("should return the number for a sequence of numbers input", function() {
    var result = Add('1,2');
    expect(result).toEqual(3);
    });
});
