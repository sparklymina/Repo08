// Only change code below this line
function addThree() {
    sum = sum + 3;
    console.log(sum);
}
function addFive() {
    sum = sum + 5;
    console.log(sum);
}
var sum = 0; 
addThree();
addFive();
// Only change code above this line

module.exports = [
    addThree,
    addFive
];