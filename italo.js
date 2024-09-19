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
let loop=true;
let contador=0;
let chute;
let readline = require("readline-sync");
let dicionario = ["casa", "palavra2", "palavra3"];
let traco = [];
const palavra = dicionario[0].split("");
let erro = 0;
let acertos =0;
let vida = 7;
let i=1;
//Criar traço do tamanho da palavra
for (let index = 0; index < dicionario[0].length; index++) {
  traco.push(" _ ");
  contador+=1;
}

while (loop) {
  if(vida<1){
      console.log("Voce  perdeu");
      break;
  }
  if (contador >0 ){
      chute = readline.question("Diga seu palpite: ");
  }else{
      console.log("Voce  venceu");
      break;
  }
  if (traco.includes(chute)) {
      console.log("Voce  ja digitou a letra");
      }
  for (let index = 0; index < dicionario[0].length; index++){
      if (palavra[index] == chute) {
          traco[index] = palavra[index];
          contador-=1;
          acertos+=1;
      }else{
          erro+=1
      }
  }
  if (acertos>0){
      console.log(estagios[0]);
      console.log("Acertou");
      console.log(traco); 
      acertos=0;   
  }else if (erro>0){
      console.log(estagios[i]);
      console.log("Errou");
      console.log(traco);
      erro=0;
      vida-=1;
      i+=1;
  }
  
  
  



}