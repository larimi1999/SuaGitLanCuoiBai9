var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog1 = require('./Dog1');

var cat = new Cat();
var mouse = new Mouse('Chip rac');
var dog = new Dog1();
try{
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog');
}

console.log(cat);