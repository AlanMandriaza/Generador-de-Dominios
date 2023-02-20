let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.es', '.net', '.io', '.cl', '.ar', '.co', '.de'];

let maxPronounIndex = pronoun.length - 1;
let maxAdjIndex = adj.length - 1;
let maxNounIndex = noun.length - 1;
let maxDomainIndex = domain.length - 1;

let generateDomain = () => {
  let whoindex = Math.floor(Math.random() * (maxPronounIndex + 1));
  let whatindex = Math.floor(Math.random() * (maxAdjIndex + 1));
  let whenindex = Math.floor(Math.random() * (maxNounIndex + 1));
  let domainindex = Math.floor(Math.random() * (maxDomainIndex + 1));

  return "www." + pronoun[whoindex] + adj[whatindex] + noun[whenindex] + domain[domainindex];
};

let domainName = generateDomain();
console.log(domainName);
