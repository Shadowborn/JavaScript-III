/* The for principles of "this";

this explained: https://www.youtube.com/watch?v=zE9iro4r918&feature=youtu.be

* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding = the most common, and when you invoke a function, like 
        word.blahblah(); look to the left of the dot, and that is what the keyword 
        will reference. word = this

* 2. Explicit binding = With .call .apply .bind, they allow us to explicitly state what
        the 'this' will be in any given function. '.call and .apply' are the same, except
        .call you pass items into the invoked function one by one and .apply is for an 
        array of items. .bind is the same as .call, but returns a new function you can use
        later.

* 3. new Binding = invoking a function with the 'new' keyword, javascript creates a new 
        object for us and the 'this' keyword inside that function gets bound to the new
        object. 

* 4. window binding = Where if none of the above rules apply then the this keyword defaults
        to the window object, unless you use strict mode 'use strict'; then it returns
        undefined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var sayAge = function(){
    //'use strict';
    console.log(this.age);
};

var me = {
    age:25
};

sayAge();

// Principle 2

// code example for Implicit Binding

var Person = function(name, age){
    return {
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
        },
        mother:{
            name: 'stacy',
            sayName: function(){
                console.log(this.name);
            }
        }
    };
};

var james = Person('James', 42);
james.sayName();
james.mother.sayName(); // 'this' = whatever is to the left of the dot before the invoked function

// Principle 3

// code example for New Binding

var Animal = function(color, name, type){/* constructor functions should be capitalized */
    //this = {} //new object
    this.color = color; //this will be bound to the new object
    this.name = name; //this will be bound to the new object
    this.type = type; //this will be bound to the new object
};
var zebra = new Animal('black and white', 'Zorro', 'Zebra'); /*new creates us a brand new object and saves it as 'this' above*/
// Principle 4

// code example for Explicit Binding

var sayName = function(language1, language2, language3){
    console.log('My name is ' + this.name + ' and I know ' + language1 + ', '+ language2 + ', '+ language3 + ', ');

};
var tasha = {
    name: 'Tasha',
    age: 22
};

var languages = ['Italian', 'Russian', 'Swedish'];

var newFunction = sayName.bind(tasha /*binds 'this' to tasha*/, languages[0], languages[1], languages[2] /*passes these arguments */); //bind creates new function
newFunction();//new function invoked