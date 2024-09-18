Jogo da Forca - Recriação
Este é um projeto de recriação do jogo da forca. O objetivo é ensinar o básico de Git e GitHub enquanto trabalhamos juntos no desenvolvimento do jogo. Acesse o repositório em Jogo da Forca.

Instruções para Iniciantes no Git
1. Clonando o Repositório
Para começar, abra o VS Code e siga estas etapas:

Abra o terminal no VS Code (atalho: Ctrl + ou acesse o menu Terminal > New Terminal).

Navegue até a pasta onde você deseja salvar o projeto. Se você estiver na área de trabalho, por exemplo, utilize:

cd Desktop

ou navegue até outra pasta da sua escolha.

Clone o repositório com o comando:

git clone https://github.com/matheusleobelo/jogoForca.git

Isso criará uma pasta chamada jogoForca com todos os arquivos do projeto.

2. Criando uma Nova Branch
Antes de fazer qualquer modificação, crie uma nova branch para trabalhar sem alterar o código principal:

No terminal, dentro da pasta do projeto, use o comando:

git checkout -b nome-da-sua-branch

Substitua "nome-da-sua-branch" por algo que descreva o que você está fazendo, como melhorar-interface.

3. Adicionando Modificações
Depois de fazer as alterações no código, siga estes passos para salvá-las:

No terminal, verifique quais arquivos foram modificados com:

git status

Adicione os arquivos modificados com o comando:

git add nome-do-arquivo

Para adicionar todos os arquivos modificados de uma vez:

git add .

4. Fazendo um Commit
Agora, salve as alterações com uma mensagem explicando o que foi feito:

No terminal, execute o comando:

git commit -m "Descreva aqui as alterações que você fez"

Lembre-se de usar mensagens claras para que os outros membros entendam o que foi alterado.

5. Enviando para o GitHub
Após o commit, você pode enviar as mudanças para o GitHub:

No terminal, envie a branch que você criou:

git push origin nome-da-sua-branch

Substitua "nome-da-sua-branch" pelo nome da branch que você criou anteriormente.

6. Criando um Pull Request
Agora que suas alterações estão no GitHub, você pode pedir para que elas sejam revisadas e integradas ao código principal criando um Pull Request:

Acesse o repositório no GitHub em Jogo da Forca.
No topo da página, clique no botão "Compare & pull request".
Adicione uma descrição detalhada das mudanças que você fez.
Clique em "Create pull request".
7. Comandos Úteis do Git
Verificar o histórico de commits:

git log

Atualizar o repositório local com as últimas mudanças do repositório remoto:

git pull origin main

Mudar de branch:

git checkout nome-da-branch
