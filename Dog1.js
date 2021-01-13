function Dog1() {
	this.stomach = [];

}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}