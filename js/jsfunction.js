function getFirstName(name) {
    let firstName = 'EU-' + name;
    return firstName;
}

const firstName = "Agnese";

let euName = getFirstName(firstName);

console.log(euName);

function displayDone() {
    console.log('2 seconds');
}

setTimeout(displayDone, 2000);

setTimeout(function() {
    console.log('3 seconds +');
}, 3000);

setTimeout(() => { console.log('4 seconds') }, 4000);

const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    fullName: function() {
        return this.type + " " + this.model;
    }
}

console.log(car.fullName())

console.log(typeof car)
console.log(car)
console.log(car.type)
console.log(car.model)
console.log(car.color)

console.log(car["model"])
console.log(car["type"])

let str1 = "Hello";
console.log("--------")
console.log("Type: " + typeof str1)
console.log(str1 instanceof String);
let str2 = new String("Hello");

console.log(str2)
console.log("Type: " + typeof str2)

console.log(str1.length)
console.log(str1.substring(1,3))

console.log(str2.toUpperCase())

let dateNow = new Date();
console.log(dateNow.getDate())

console.log(Math.PI)
