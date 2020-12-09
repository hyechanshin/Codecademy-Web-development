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

let currentDna = mockUpStrand();

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
      this.dna[i] = newBase;
      return this.dna;
    },
    compareDNA() {
      let example1 = this.dna;
      let example2 = currentDna;
      let score = 0;
      for (let j; j < example1.length; j++) {
        for (let k; k < example2.length; k++) {
          if (j === k && example1[j] === example2[k]) {
            score = score + 1;
          }
        }
      }
      console.log(`specimen #1 and specimen #2 have ${Math.floor(100 / 15 * score)}% DNA in common`)
    }
  }
}

console.log(mockUpStrand(1));
console.log(pAequorFactory(3, [2, 2, 2]));



