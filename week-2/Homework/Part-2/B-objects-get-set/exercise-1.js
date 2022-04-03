/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
const keys = Object.keys(kitten);
 console.log(keys)
keys.forEach((key , index) =>{
    console.log(`${key}: ${kitten[key]}`);
});
