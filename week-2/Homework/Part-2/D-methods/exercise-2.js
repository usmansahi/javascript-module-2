/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: (newAddress)=> {
       return (this.currentAddress = newAddress);
        
    },
    celebrateBirthday: function (){
        return (this.age = this.age + 1);
    }
};
console.log(person.changeAddress("BArca"));
console.log(person.celebrateBirthday());
