// Write code below this ling
    function localScope(){
        var myVariable = "I am here!";
        console.log(myVariable);
    }
    localScope(myVariable); // EMINA'S NOTES - SHOULD THIS BE HERE? IF DEFINING A VARIABLE INSIDE A FUNCTION MEANS IT'S NOT DEFINED OUTSIDE OF IT, WHY CALL THE FUNCTION? MAYBE I DON'T UNDERSTAND THE TASK?
// Write code above this line

// myVariable is not defined outside of localScope
if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable)
} else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope;