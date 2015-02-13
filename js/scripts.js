var triangleType = function(side) {
  if (side[0] === (side[1] || side[2])) {
    if ((side[1] === side[2])) {
      return "an equilateral triangle"
    } if ((side[0] === side[1]) && (side[2] > (side[0] + side[1]))) {
      return "not a triangle"
    } else if ((side[0] === side[2]) && (side[1] > (side[0] + side[2]))) {
      return "not a triangle"
    } else {
      return "an isosceles triangle"
    }
  } else if ((side[1] === side[2]) && (side[0] <= (side[1] + side[2]))) {
    return "an isosceles triangle"
  } else {
    return "a scalene triangle"
  }
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    sides = [];
    var side_one = parseInt($("input#side_one").val());
    var side_two = parseInt($("input#side_two").val());
    var side_three = parseInt($("input#side_three").val());
    sides.push(side_one);
    sides.push(side_two);
    sides.push(side_three);
    var result = triangleType(sides);

    $(".triangletype").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
