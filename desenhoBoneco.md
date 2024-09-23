const palavras = ["python", "java", "javascript", "forca", "programacao"];

// Função para escolher uma palavra aleatória
function escolherPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

// Função para exibir o boneco da forca
function mostrarBoneco(tentativas) {
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
  console.log(estagios[tentativas]);
}

// Função principal do jogo
function jogarForca() {
  const palavra = escolherPalavra();
  let letrasAdivinhadas = [];
  let palavraOculta = Array(palavra.length).fill("_");
  let tentativas = 0;
  const maxTentativas = 6;

  while (tentativas < maxTentativas && palavraOculta.includes("_")) {
    console.log("\nPalavra: " + palavraOculta.join(" "));
    mostrarBoneco(tentativas);

    let letra = prompt("Adivinhe uma letra: ").toLowerCase();

    if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)) {
      console.log("Por favor, insira apenas uma letra.");
      continue;
    }

    if (letrasAdivinhadas.includes(letra)) {
      console.log("Você já adivinhou essa letra!");
      continue;
    }

    letrasAdivinhadas.push(letra);

    if (palavra.includes(letra)) {
      console.log(Boa! A letra '${letra}' está na palavra.);
      for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
          palavraOculta[i] = letra;
        }
      }
    } else {
      console.log(A letra '${letra}' não está na palavra.);
      tentativas++;
    }
  }

  if (!palavraOculta.includes("_")) {
    console.log("\nParabéns! Você adivinhou a palavra: " + palavra);
  } else {
    mostrarBoneco(tentativas);
    console.log("\nVocê perdeu! A palavra era: " + palavra);
  }
}

// Iniciar o jogo
jogarForca();