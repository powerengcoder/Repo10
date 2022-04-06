var myPet = {
species : "Akita",
name: "Bobi",
legs: 4,
friends: "Miki, Tom"

}

function myFunction(myObj){
return myObj;
}

console.log(myFunction(myPet));
module.exports = {
    myPet,
    myFunction
};