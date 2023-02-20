let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let maxPronounIndex = pronoun.length - 1;
let maxAdjIndex = adj.length - 1;
let maxNounIndex = noun.length - 1;

let generateExcuse = () => {
  let whoindex = Math.floor(Math.random() * (maxPronounIndex + 1));
  let whatindex = Math.floor(Math.random() * (maxAdjIndex + 1));
  let whenindex = Math.floor(Math.random() * (maxNounIndex + 1));

  return pronoun[whoindex] + " " + adj[whatindex] + " " + noun[whenindex];
};

let excuse = generateExcuse();
console.log(excuse);
