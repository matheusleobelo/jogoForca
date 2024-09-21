//Função valores aleatorios
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const estagios = [
    `
    -----
    |   |
    |
    |
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |   |
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|\
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|\
    |  /
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|\
    |  / \
    |
    --------
    `,
  ];
  
  let readline = require("readline-sync");
  let dicionario = ["casa", "palavra2", "palavra3"];
  let traco = [];
  const palavra = dicionario[0].split("");
  let erro = 0;
  
  //Criar traço do tamanho da palavra
  for (let index = 0; index < dicionario[0].length; index++) {
    traco.push(" _ ");
  }
  
  while (true) {
    let chute = readline.question("Diga seu palpite: ");
  
    for (let index = 0; index < dicionario[0].length; index++) {
      if (palavra[index] == chute) {
        traco[index] = palavra[index];
        console.log(traco);
      } else if (traco.includes(chute)) {
        console.log("Ja tem a letra, digite outra");
      }else if (palavra[index] !== chute) {
        console.log("Voce errou a letra, digite outra");
        console.log(estagios[erro])
        erro+=1

      } 
    }
  
    
  }
  
  // console.log(`sua palavra é ${traco}`);
  