// Only change code below this line
function convertToInt(str) {
    var str = parseInt(str, 16);
    return str; // IS THIS WHAT SHOULD BE RETURNED?
}
console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
// Only change code above this line
module.exports = convertToInt;