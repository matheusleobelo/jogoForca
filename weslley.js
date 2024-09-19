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
  let acerto = 0;
  //parte visual da forca
  console.log("----------------JOGO DA FORCA-----------------\n",estagios[0]);
  
  //Criar traço do tamanho da palavra
  for (let index = 0; index < dicionario[0].length; index++) {
    traco.push(" _ ");
  }

  console.log(traco.join(""));
  //fim da parte visual


//chutes atuais e lista de chutes anteriores
  let chute = readline.question("\nDiga seu palpite: ");
  let chuteAnt = []

//verificação de letra repetida
 if (chuteAnt.includes(chute)){
    console.log("Você já chutou essa letra!")
 }else {
    chuteAnt.push(chute)
 }
 

for (let index = 0; index < palavra.length; index++) {
    if (palavra[index] === chute) {
        traco[index] = chute; 

    }
}
console.log(traco.join(" "));

