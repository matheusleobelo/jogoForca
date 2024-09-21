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
    |  /|\\
    |
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|\\
    |  /
    |
    --------
    `,
    `
    -----
    |   |
    |   O
    |  /|\\
    |  / \\
    |
    --------
    `,
  ];
  
  let readline = require("readline-sync");
  let dicionario = ["casa", "java", "php", "bola", "rede", "jogo", "cidade", "beleza", "Felipe", "grupo", 
    "professor", ];
  let traco = [];
  const palavra = dicionario[0].split("");
  let acerto = 0;
  let vida = 6
  
  //Criar traço do tamanho da palavra
  for (let index = 0; index < dicionario[0].length; index++) {
    traco.push(" _ ");
  }
  
  while (vida != 0 && derrota == false) {
    let chute = readline.question("Diga seu palpite: ");
  
    for (let index = 0; index < dicionario[0].length; index++) {
      if (palavra[index] == chute) {
        traco[index] = palavra[index];
        console.log(traco);
        acerto += 1;
        //Letras repetidas
      } else if (traco.includes(chute)) {
        console.log("Ja tem a letra, digite outra", chute);
      } else if (acerto > 1) {
        acerto = 1;
      }
    }
  
    if (acerto == 0) {
      console.log(estagios[0]);
    } else {
      acerto = 0;
    }
  }
  if(acerto = palavra);
  console.log("Parabens, voce venceu!")
 console.log(`sua palavra é ${traco}`);
  

  
 

     
