describe('triangleType', function() {
  it('is scalene if no triangle sides are the same', function() {
    expect(triangleType([3, 4, 6])).to.equal("a scalene triangle");
  });

  it('is isosceles if any triangle sides are the same', function() {
    expect(triangleType([3, 6, 6])).to.equal("an isosceles triangle");
  });

  it('is isosceles if any triangle sides are the same', function() {
    expect(triangleType([7, 7, 6])).to.equal("an isosceles triangle");
  });

  it('is equilateral if all triangle sides are the same', function() {
    expect(triangleType([18, 18, 18])).to.equal("an equilateral triangle");
  });

  it('it is not a triangle if you do not give numbers', function() {
    expect(triangleType(["bark", "bark", "meow"])).to.equal("not a triangle");
  });
  it('it is not a triangle if other side is greater than first two combined', function() {
    expect(triangleType([3, 3, 7])).to.equal("not a triangle");
  });
});
