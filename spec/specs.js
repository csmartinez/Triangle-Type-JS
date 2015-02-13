describe('triangleType', function() {
  it('is scalene if no triangle sides are the same', function() {
    expect(triangleType([3, 4, 6])).to.equal("scalene");
  });

  it('is isosceles if any triangle sides are the same', function() {
    expect(triangleType([3, 6, 6])).to.equal("isosceles");
  });

  it('is isosceles if any triangle sides are the same', function() {
    expect(triangleType([7, 7, 6])).to.equal("isosceles");
  });

  it('is equilateral if all triangle sides are the same', function() {
    expect(triangleType([18, 18, 18])).to.equal("equilateral");
  });

  it('it is not a triangle if you do not give numbers', function() {
    expect(triangleType(["bark", "bark", "meow"])).to.equal("not a triangle");
  });
});
