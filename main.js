let readline = require("readline-sync");

let dicionario = [
  "casa", "carro", "livro", "mesa", "cadeira", "janela", "porta", "telefone", 
  "computador", "mouse", "teclado", "papel", "caneta", "lapis", "chao", "teto", 
  "parede", "luz", "geladeira", "fogao", "microondas", "forno", "prato", "garfo", 
  "faca", "colher", "panela", "cama", "travesseiro", "cobertor", "espelho", "chuveiro", 
  "banheiro", "quarto", "sala", "cozinha", "jardim", "varanda", "carteira", "bolsa", 
  "mochila", "roupa", "sapato", "meia", "cinto", "camisa", "calca", "jaqueta", 
  "blusa", "saia", "vestido", "brinco", "anel", "pulseira", "relogio", "chave", 
  "oculos", "cachorro", "gato", "passaro", "peixe", "cavalo", "vaca", "tigre", 
  "leao", "elefante", "girafa", "coelho", "urso", "rato", "camelo", "ovelha", 
  "macaco", "cobra", "abelha", "arara", "papagaio", "tartaruga", "foguete", 
  "aviao", "bicicleta", "moto", "onibus", "barco", "navio", "trem", "trator", 
  "patins", "bola", "brinquedo", "carinho", "boneca", "heroi", "vilao", "fantasia", 
  "sol", "lua", "estrela", "planeta", "galaxia", "universo"
];

let palavraEscolhida = getRandomIntInclusive(0,99)
const letras = dicionario[palavraEscolhida].split("");
let traco = [];

let vida = 6;
let chute;
let acertos = 0;
let estagio = 0;
let vitoria = false;
let letrasFaltando = 0;

// Desenho da forca
const Desenhos = [
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
console.log("----------------JOGO DA FORCA-----------------\n",Desenhos[0]);
//Criar traço do tamanho da palavra
for (let index = 0; index < dicionario[palavraEscolhida].length; index++) {
  traco.push(" _ ");
  
}

letrasFaltando = dicionario[palavraEscolhida].length;

while (vida != 0 && vitoria == false) {
  chute = readline.question("Diga seu palpite: ");

  //Letra repetida
  if (traco.includes(chute)) {
    console.log("Você já digitou essa letra");
  } else {
    for (let index = 0; index < dicionario[palavraEscolhida].length; index++) {
      if (letras[index] == chute) {
        traco[index] = letras[index];
        acertos += 1;
        letrasFaltando -= 1;
      }
    }

    if (letrasFaltando == 0) {
      vitoria = true;
    }

    if (acertos > 0) {
      console.log(Desenhos[estagio]);
      console.log("Acertou");
      console.log(traco);
      acertos = 0;
    } else {
      estagio += 1;
      console.log(Desenhos[estagio]);
      console.log("Errou");
      console.log(traco);
      vida -= 1;
    }
  }
}

if (vida < 1) {
  console.log("Voce  perdeu");
  console.log(`Sua palavra era ${dicionario[palavraEscolhida]}`)
} else {
  console.log("Voce venceu");
}

//Função valores aleatorios
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
