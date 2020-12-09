// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (num, bases) => {
  return {
    specimenNum: num,
    data: bases,
    mutate() {
// Random Loc on DNA
      let i = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[i] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
      },
      compareDNA() {
        
      }
    }
  }
}

console.log(mockUpStrand(1));
console.log(pAequorFactory(3, [2, 2, 2]));



