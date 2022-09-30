//Class is user to create a templet that can be user when creating objects. class by itself is not an object, just a templete
class Person {
    constructor(firstName, surName = "Unkown") { //surName could be default
        this.firstName = firstName;
        this.surName = surName;
        this.score = 0; //Score is not included in the constuctor argements which means that every object will get the "score" attrubite which is 0 for all
        this.creationDate = new Date()
    }
    fullName() {// We can create method inside of class. Such methods can only be accessed by the object of the same type class
        return this.firstName + " " + this.surName
    }
    setScore(score) {
        this.score = score;
    }
    getScore() {
        return this.score * 2;
    }
}

//Not good
/* let pe = {
    firstName: "Tom",
    lastName:"Hanks"
}
 */
/*
const userOne = new Person("Tom", "Hanks"); // Here we create object of the class Person
const userTwo = new Person("Grit", "Academy")
const userThree = new Person("Academy")
 console.log(userOne);
console.log(userTwo);
console.log(userThree); */

/* userOne.score = 200;
console.log(userOne);
console.log(userOne.firstName);
console.log(userOne.fullName());
userOne.setScore(1000)
console.log(userOne.score); // console.log(userOne.getScore());
console.log(userThree.setScore(-1000)); */


/* console.log(userOne);
userOne.setScore(100);
console.log(userOne);
console.log(userOne.getScore());
console.log(userOne.score); */

/* const numbers = [1, 1, 2, 3, 4, 6, 23, 1, 2, 3, 4];
console.log(numbers);
const numbersToSet = new Set(numbers); //Set takes value only and doesnt allow duplicates
console.log(numbersToSet);
numbersToSet.add(100);
console.log(numbersToSet);

const userOne = new Person("Tom", "Hanks");
const userTwo = new Person("Grit", "Academy")
const userThree = new Person("Academy")

const map = new Map(); // Map takes key and value as argements where the key value is unique
map.set("userOne", userOne);
if (!map.has("userOne")) { //has() function to check if the same key exist inside of map list
    map.set("userOne", userTwo); // set() method is used to add items to the map list. It takes two argumenets (key,value)
} else {
    //alert("Get out")
}
map.set("Second", 5);
map.set("Second", 10);
map.set("Second", 15);
map.set("Third", 20);
map.set("Fourth", "Hello");
console.log(map.has("First"));
map.delete("Second"); // delete() function To delete an item by key
console.log(map);
console.log(map.get("Username")); // get() to get an item by key


const map2 = new Map();
map2.set(1, 100);
map2.set(2, 200);
map2.set(3, 300);
for (const item of map2.keys()) { //keys() returnera alla keys in map
    console.log(item);
}
for (const item of map2.values()) {//values() returnera alla values in map
    console.log(item);
}
for (const item of map2.entries()) {//entries() returnera alla keys and values
    console.log(item);
}  */
/* for (const [key, value] of map) {
    console.log(key + "-" + value);
} */

/* const map3 = new Map();
const user = new Person("Tom", "Hanks");
map3.set(0, user);
console.log(map3);
user.setScore(100); */


//Spread operators
const numbers = [1, 2, 3];
const maxNumber = Math.max(...numbers);//Math.max doesn't take array as an argment. So we spread operators we convert the array to list
console.log(maxNumber);



const set = new Set([1, 3, 44, 2, 3, 4, 5, 1, 2, 3, 1]);
//set.sort((a, b) => a-b) // We cant use sort with set
console.log(set);
// we need to convert set to array to access sort function. The two example below convert to array
let sortedArray = Array.from(set).sort((a, b) => a-b); 
console.log(sortedArray);
let spreedSetToArray = [...set].sort((a, b) => a - b);
console.log(spreedSetToArray);


const letters = ['A', 'B', 'C'];
const otherLetters = ['D', 'E', 'F', 'OSV']
const allLetters = [...letters, ...otherLetters, "O"] // Merge two arrays together
console.log(allLetters);

console.log([...letters]); // Create a copy of an array


const add = (...args) => { //Unlimited amount af argments
    let sum = 0;
    for (const number of args) {
        sum += number;
    }
    return sum;
}
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log(add(1,2,3,4,5));
console.log(add(1, 2, 3, 4, 5, "S"));


let someResult = [1, 2, 3, 4, 5,-1].some((x) => x < 0); //Or condition
console.log(someResult);

let everyResult = [1, 2, 3, 4, 5, -1].every((x) => x > 4); //And condition
console.log(everyResult);
console.log([6, 7, 8, 9].every((x) => x > 4));

let someFind = [1, 2, 5, 3, 4, 5, -1].find((x) => x > 2);//Return the first element that meets the specified condition
console.log(someFind);

let someFindIndex = [1, 2, 5, 3, 4, 5, -1].findIndex((x) => x > 2);//Return the first index of an element that meets the specified condition
console.log(someFindIndex);

const string = "Welcome to React Course";
/* console.log(string.includes("React"));
console.log(string.startsWith("Welcome"));
console.log(string.startsWith("React")); */
console.log(string.endsWith("Course"));
console.log(string.endsWith("React"));
//console.log(letters.startsWith("A")); only strings
console.log(letters.includes("A"));