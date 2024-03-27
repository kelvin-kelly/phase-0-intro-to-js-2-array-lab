// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) { 
    cats.push(name);
    return cats;

}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    return cats.concat(name);
}
// name: This is a variable containing a string.
// .concat(): This is a method in JavaScript used to concatenate strings. It doesn't change the original string; but, it returns a new string .
// cats: This is a string variable that you want to concatenate with the name string.
function prependCat(name) {
    let newCats = cats.concat(name);
    return name.concat(newCats);
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeCatAtIndex(index) { 
    return cats.slice(0, index).concat(cats.slice(index + 1));
}
