
var objOne = {title: "Titanic", song: "My Heart Will Go On", genre: "drrama"};
var objTwo = {title: "Titanic", song: "My Heart Will Go On", genre: "drama"};
var objThree = {title: "Titanic", song: "My Heart Will Go On", genre: "drama"};
var objFour = {title: "Titanic", song: "My Heart Will Go On", genre: "drama"};

function myFunction(myObj, checkProp){
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    return "Not Found"


}

console.log(myFunction(objOne, "title"));
console.log(myFunction(objTwo, "song"));
console.log(myFunction(objThree, "genre"));
console.log(myFunction(objFour, "actor"));
module.exports = myFunction;