var myClothes ={
hat : "Fedora",
shirt: "Nike",
shoes: "Converse"

};

function myFunction(myObj){
hatValue = myObj.hat;
shirtValue = myObj.shirt;
shoesValue = myObj.shoes;

return { hatValue, shirtValue, shoesValue };

}

console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);