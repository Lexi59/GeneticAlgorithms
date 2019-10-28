
var target = "Addisen";
var pop;
function setup() {
  pop = new population(target, 0.01, 20);
  var best = pop.getFitness();
  while(best != target.length){
  	pop.print();
  	pop.reproduce();
  	best = pop.getFitness();
  }
  pop.print();
}

function draw() {
//population.naturalSelection();

//population.generate();

//population.calcFitness();

//population.evaluate();
}