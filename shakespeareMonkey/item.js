function getRandomChar() {
	var a = Math.floor((Math.random() * 96) + 32);
	return String.fromCharCode(a);
}

class Item{
	constructor(l){
		var i;
		this.genes = new Array();
		this.fitness = 0;
		for(i = 0; i < l; i++){
			this.genes.push(getRandomChar());
		}
	}
	mutate(){
		var rnd = Math.random();
		if (rnd < .05){
			//console.log("MUTATING!!");
			var rndIndex = Math.floor(Math.random() * this.genes.length);
			this.genes[rndIndex] = getRandomChar();
		}
	}
}
