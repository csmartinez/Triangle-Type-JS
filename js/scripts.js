var triangleType = function(side) {
  if (side[0] === (side[1] || side[2])) {
    if ((side[1] === side[2])) {
      return "equilateral"
    } else {
      return "isosceles"
    }
  } else if (side[1] === side[2]) {
    return "isosceles"
  } else {
    return "scalene"
  }
}
