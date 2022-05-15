// Array of objects
function Product(name, price) {
    this.name = name;
    this.price = price;
}

var data = [
    new Product("Coffee", 2.5),
    new Product("Tea", 2.5),
    new Product("Milk", 2.5),
    new Product("Cake", 10),
    new Product("Pie", 5),
];

var data2 = data;
// The reference of the array get copied
// if we change the data2, it will also change the data
data2[0].name = "Coffee2";
// console.log(data[0].name);

data.forEach(
    function (item, index) {
        console.log(item.name + " " + item.price);
    }
);
// Dont use forEach if you will be deleting the elements from  the array

var changedData = data.map(
    function (item, index) {
        item.tax = item.price * 0.2;
        return item;
    }
);
console.log(changedData);
// will apply the function to each item in the array and return the new array( the new array is of pointers  refering to the same objects)

var productNames = data.map(
    function (item, index) {
        return item.name;
    }   
);
console.log(productNames);
// will apply the function to each item in the array and return the new array( the new array is of string type )
console.log(productNames.join(", ")); // Join the array to a string


var filteredData = data.filter(
    function (item, index) {
        return item.price > 3; //return a boolean value
    }
); // new array formed same as above cases
console.log(filteredData);

var filteredData2 = data.filter(
    function (item, index) {
        return item.price > 3;
    }
).map(
    function (item, index) {
        return new Product(item.name, item.price); //deep copy , in this all additional attributes will be there ,  moreover there also be product.prototype  info preserved 
        // return { // this will form new object of type object 
        //     name: item.name,
        //     price: item.price
        // }
    }
); // in this case new array of pointers will form  but the product object will be different from data
filteredData2[0].name = "Coffee3";
console.log(filteredData2);
console.log(data);

var findedData = data.find(
    function (item, index) {
        return item.name === "Cake";
    }
);
console.log(findedData);
// Find the first item that matches the condition
// If not found, it will return undefined


var findedIndex = data.findIndex(
    function (item, index) {
        return item.name === "Cake";
    }
);
console.log(findedIndex);
// Find the index of the first item that matches the condition
// If not found, it will return -1


// Sort the array
var sortedData = data.sort(
    function (item1, item2) {
        // return item1.price - item2.price; //ascending
        return item2.price - item1.price; // descending order
    }
);
console.log(sortedData);
// Swap the item if the return value is positive


var slicedData = data.slice(2); // return the  items from index 2 inclusively
console.log(slicedData);
// Slice the array starting from first argument and ending at second argument - 1

var splittedData = data.splice(0, 2); // return the first 2 items and remove them from the array
console.log(splittedData);
console.log(data);
// the difference between splice and slice is that splice will remove the items from the array

// var newData = [data.splice(0, 2), data.splice(0, 2)]; // this will create a new array with 2 arrays
// console.log(newData);

var newData = data.splice(1, 2).concat(data.splice(0, 2)); // this will create a new array with 2 arrays
console.log(newData);


// Serialization and Deserialization

var obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    getInfo : function () { // function is not serializable -> only data
        return this.name + " " + this.age;
    }
};

var objJSON = JSON.stringify(obj);
console.log(objJSON);
// Serialize the object to a string
// When object is converted to string, it is called json string

// Deserialize the string to an object
// console.log(JSON.parse(objJSON));

// Recomended to use try catch block to handle the error
try {
    var obj2 = JSON.parse(objJSON);
    console.log(obj2);
}
catch (error) {
    console.log(error);
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.type = "Base Product"; // this will not be serialized
var p1 = new Product("Coffee", 2.5);

var p1JSON = JSON.stringify(p1);
console.log(p1JSON);
var p1Copy = JSON.parse(p1JSON);
console.log(p1Copy);

// A lot of things get lost when you serialize an custom object

// You can also use these function on arrays



// ECMAScript
// JavaScript follows the ECMAScript standard
// https://en.wikipedia.org/wiki/ECMAScript

// New features in ECMAScript 6 -> ES6
