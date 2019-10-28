class population {
    constructor(p, m, num) {
      this.expectedPhrase = p;
      this.mutationRate = m;
      this.popArray = new Array();
      this.initialize(num);
    }
    initialize(n){
      var i;
      for(i = 0; i< n; i++){
        this.popArray.push(new Item(this.expectedPhrase.length));
      }
    }
    getFitness(){
      var best = 0;
      for (var i = 0; i < this.popArray.length; i++){
        var score = 0;
        for(var j = 0; j < this.popArray[i].genes.length; j++){
          if (this.popArray[i].genes[j] == this.expectedPhrase[j]){
            score++;
          }
        }
        this.popArray[i].fitness = score;
        if (score > best){
          best = score;
        }
      }
      //console.log(this.popArray);
      console.log(best);
      return best;
    }
    crossover(a, b){
      var splitIndex = Math.floor(Math.random() * a.genes.length);
      //console.log(splitIndex);
      //console.log(a.genes);
      //console.log(b.genes);
      var child = new Item(a.genes.length);
      child.genes = new Array();
      for (var i = 0; i < a.genes.length; i++){
        if (i > splitIndex){
          //console.log("Adding from B");
          child.genes[i] = b.genes[i];
        }
        else {
          //console.log("adding from a");
          child.genes[i] = a.genes[i];
        }
        
      }
      //console.log(child);
      child.mutate();
      return child;
    }
    reproduce(){
      var newPop = new Array();
      for (var i = 0; i < this.popArray.length; i++) {
        var personA = null;
        var personB = null;
        while(personA == null){
          var randIndex = Math.floor(Math.random() * this.popArray.length);
          var randFitness = Math.random() * this.expectedPhrase.length;
          if (randFitness < this.popArray[randIndex].fitness + 1){
            var personA = this.popArray[randIndex];
            //console.log(personA);
          }
        }
        while(personB == null){
          var randIndex = Math.floor(Math.random() * this.popArray.length);
          var randFitness = Math.random() * this.expectedPhrase.length;
          if (randFitness < this.popArray[randIndex].fitness + 1){
            var personB = this.popArray[randIndex];
            //console.log(personB);
          }
        }
        newPop.push(this.crossover(personA, personB));
      }
      //console.log(newPop);
      this.popArray = newPop;
      this.getFitness();
    }
    print(){
      for(var i = 0; i < this.popArray.length; i++){
        print(this.popArray[i].genes);
      }
    }
}