function myObject(){
'use strict';
const MATH_CONSTANTS = {
    E: 2.71828

};

//comment
Object.freeze(MATH_CONSTANTS);
//comment
try{
    MATH_CONSTANTS.E = 23;
} catch(error){
    console.log(error.message);
}
return MATH_CONSTANTS.E;

}

const E = myObject();
console.log(E);
module.exports = myObject;