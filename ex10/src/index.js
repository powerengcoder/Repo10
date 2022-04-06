function myFunction(){
var myMusic = {
001 : {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: {
        1: "CD",
        2: "8T",
        3: "LP"
    },
    gold: true
},

002 :{
    artist: "Artist",
    title: "Album Title",
    release_year: 2022,
    formats: {
        1: "OX",
        2: "OY",
        3: "OZ"
    },
    gold: false
}
};
return myMusic;
}

myFunction()[2];
console.log(myFunction());
console.log(myFunction()[1]);
console.log(myFunction()[2]);
module.exports = myFunction;