
var chalk = require('chalk');

function Dog1(name) {
	this.name = name;
	this.stomach = [];

}

Dog1.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

Dog1.prototype.sayHi =  function(){
	console.log('Hi! I am a dog. My name is  a' + chalk.red(this.name))
};

module.exports = Dog1;

