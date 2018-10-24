var one = require("./one");
var two = require("./two");
console.log(one);

exports.default = {
  oneAddTwo: one.default.one + " " + two.default.two
};
