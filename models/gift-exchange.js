const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static traditional(names) {
    console.log(names);
    const shuffled_names = shuffle(names.names);
    const pairings = grouper(shuffled_names);
    const gifting_string_arr = [];
    pairings.map((pair) => {
      gifting_string_arr.push(pair[0] + " will exchange gifts with " + pair[1]);
    });
    console.log(gifting_string_arr);
    return gifting_string_arr;
  }
}
function shuffle(names) {
  let currentIndex = names.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [names[currentIndex], names[randomIndex]] = [
      names[randomIndex],
      names[currentIndex],
    ];
    return names;
  }
}
function grouper(names_arr) {
  result = [];
  for (var i = 0; i < names_arr.length; i += 2) {
    result.push([names_arr[i], names_arr[i + 1]]);
  }
  return result;
}

module.exports = GiftExchange;
