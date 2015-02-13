var triangleType = function(side) {
  if (side[0] === (side[1] || side[2])) {
    if ((side[1] === side[2])) {
      return "equilateral"
    } if ((side[0] === side[1]) && (side[2] >= (side[0] + side[1]))) {
      return "not a triangle"
    } else if ((side[0] === side[2]) && (side[1] >= (side[0] + side[2]))) {
      return "not a triangle"
    } else {
      return "isosceles"
    }
  } else if ((side[1] === side[2]) && (side[0] <= (side[1] + side[2]))) {
    return "isosceles"
  } else {
    return "scalene"
  }
}
