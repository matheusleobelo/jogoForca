# Jogo da Forca - Recriação
Este é um projeto de recriação do jogo da forca. O objetivo é ensinar o básico de Git e GitHub enquanto trabalhamos juntos no desenvolvimento do jogo. O projeto será dividido em três branches principais: main, reserva e final.

Acesse o repositório em Jogo da Forca.

Estrutura do Projeto
main: Branch principal onde o código mais atual e funcional será mantido.
reserva: Branch de trabalho onde todos vão contribuir.
final: Branch para integração final das funcionalidades.
Regras de Contribuição
Todo o trabalho será feito na branch reserva.
O arquivo principal será o main.js, que conterá o código mais atualizado e funcional.
Cada membro deve copiar o código de main.js para o seu arquivo individual (nome.js) antes de começar a trabalhar.
Todas as alterações e testes devem ser feitos exclusivamente no arquivo individual (nome.js). Isso permite testar mudanças sem interferir no código principal.
Não há responsáveis por features específicas; todos estão focados em resolver um único problema juntos.
Instruções Iniciais
## 1. Clonando o Repositório
Abra o VS Code.

Crie uma pasta para o projeto dentro do VS Code (clique com o botão direito na barra lateral e selecione "New Folder").

Abra o terminal no VS Code (atalho: Ctrl + ou vá em Terminal > New Terminal).

Dentro da pasta que você criou, execute o seguinte comando para clonar o repositório:

```git clone https://github.com/matheusleobelo/jogoForca.git```

Entre na pasta do projeto usando o terminal:

```cd jogoForca```

## 2. Mudando para a Branch Reserva
Antes de começar a trabalhar, mude para a branch de trabalho:

```git checkout reserva```

## 3. Copiando o Código do main.js
Antes de fazer qualquer alteração, abra o arquivo main.js, selecione todo o conteúdo com Ctrl + A, copie com Ctrl + C e cole no seu arquivo individual (nome.js).

Agora, você pode editar e testar suas mudanças no seu arquivo.

Mantendo o Código Atualizado Antes de Qualquer Mudança
Sempre que você for fazer novas alterações no código, siga este passo a passo para garantir que está com a versão mais recente do projeto:

No terminal, execute o comando para garantir que você está na branch reserva:

```git checkout reserva```

Atualize seu repositório local com as últimas mudanças da branch reserva:

```git pull origin reserva```

Verifique se há mudanças no seu arquivo com:

```git status```

Agora, copie o código mais recente de main.js para o seu arquivo pessoal nome.js e faça suas alterações e testes.

Fazendo e Enviando Suas Alterações
Depois de testar e validar suas mudanças no seu arquivo nome.js, siga os passos para fazer o commit e enviar suas alterações para o GitHub:

Adicione todas as suas mudanças:

```git add .```

Faça um commit descrevendo as mudanças feitas:

```git commit -m "Descrição das alterações"```

Envie as mudanças para a branch reserva no GitHub:

```git push origin reserva```

Comandos Úteis do Git
Verificar o histórico de commits:

```git log```

Verificar o status dos arquivos:

```git status```

Atualizar o repositório local com as últimas mudanças:

git pull origin reserva

Dicas para o Projeto
Organização: Faça commits regulares e mantenha seu arquivo separado dos demais até que a integração seja feita.

Como Jogar o Jogo da Forca? 

O jogo da forca, também conhecido por enforcado ou carrasco, é bastante simples e pode ser jogado por duas ou mais pessoas. Um dos participantes pensa numa palavra e desenha uma linha em branco para cada letra da palavra, sem a revelar. Os outros jogadores tentam adivinhar as letras que compõem a palavra, sugerindo uma letra de cada vez. 

Cada vez que um jogador sugere uma letra correta, esta é preenchida nas linhas correspondentes. No entanto, se a letra não fizer parte da palavra, é desenhada uma parte do corpo de um boneco. O objetivo completar a palavra antes que o desenho do boneco seja finalizado: 

    Desenhe num quadro ou folha de papel a estrutura de uma forca; 

    Selecione a palavra e coloque um traço por cada letra; 

    Quem está a adivinhar a palavra diz uma letra de cada vez; 

    Se acertar escreve-se a letra no respetivo lugar; 

    Se errar, começa a desenhar-se o boneco (primeiro a cabeça, depois o tronco, de seguida pernas e braços e termina-se com olhos, nariz e boca); 

    O jogador perde se não conseguir identificar a palavra antes do desenho estar completo; 

    Em qualquer momento o jogador pode tentar adivinhar a palavra, mas se errar acrescenta-se algo ao desenho. 

 

    Criar lista de palavras, sortear uma delas (array com palavras dentro e uma função para escolher um) 

    Colocar as linhas do tamanho da palavra selecionada 

    Quando uma letra for sugerida no terminal, irá aparecer se é ou não da palavra 

    Se correto deverá preencher uma das posições das linhas 

    Se correto substitui uma das linhas pela palavra correta em sua posição respectiva 

    Se errado começar a desenhar um boneco toda vez que errar 

    Dicas(opcional) 
