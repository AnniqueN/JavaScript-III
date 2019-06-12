/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
 *1. Window Binding - binds to the window as the outermost bindable when not given what to bind too
* 2. Explicit Binding - binds to what it is told to do
* 3. New Binding - binds to an object that is to be created
* 4. Implicit Binding - binds to what makes the most sense
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
  console.log (this);

// Principle 2

// code example for Implicit Binding
const TomJerry = {
    name: "Sizle",
    phrase: "Eat my Cheese!",
    thirdPerson: function() {
        return `${this.name} says ${this.phrase}`;
    },
};
console.log(TomJerry.thirdPerson());

// Principle 3

// code example for New Binding
function Tom(material) {
    this.name = material.name,
    this.phrase = material.phrase,
    this.thirdperson = function () {
        return `${this.name} says ${this.phrase}`;
    }
};
const TomJerryBrother = new Tom({
    name: "Snoppie",
    phrase: "please run!",
});
console.log(TomJerry.thirdPerson());

// Principle 4

// code example for Explicit Binding
const TomJerrySister = {
    name: "Tobi",
    phrase: "Horray",
};
function thirdPerson() {
    return `${this.name} says ${this.phrase}`;
};
console.log(thirdPerson.call(TomJerrySister));