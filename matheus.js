//Função valores aleatorios
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let readline = require("readline-sync");
let dicionario = ["sport", "palavra2", "palavra3"];
let traco = [];
const word = dicionario[0].split("");
let chute = readline.question("Diga seu palpite: ");
// console.log(word);

//Criar traço do tamanho da palavra
for (let index = 0; index < dicionario[0].length; index++) {
  traco.push(" _ ");
  
}

for (let index = 0; index < dicionario[0].length; index++) {
  if (word[index] == chute) {
    traco[index] = word[index];
    console.log(traco);
  }
}

// console.log(`sua palavra é ${traco}`);
