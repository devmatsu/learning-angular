# Aprendendo Angular

## O que é Angular?
Angular é um framework JavaScript para a criação de interfaces de usuário, em especial de SPAs, ou Single-Page Applications, como também é conhecido esse tipo de aplicação front-end.

## Angular CLI
Angular CLI é a interface de linha de comando do Angular. É com o CLI que podemos utilizar os comandos para realizar as diversas tarefas no projeto. (`$ ng new`, `$ ng serve`, `$ ng generate`, `$ ng build`, etc)

## Instalando o Angular
Para a instalação utilizaremos o NPM, ou seja, devemos ter o Node.js e NPM instalados. No terminal, utilizamos o seguinte comando para instalar o Angular CLI: `$ npm install -g @angular/cli`. <br>
Utilizamos o comando install para indicar ao NPM que desejamos instalar um novo pacote. O parâmetro -g é usado para indicar que o pacote deve ser instalado globalmente, isto é, não precisaremos instalá-lo novamente dentro de cada novo projeto. @angular/cli é o nome do pacote que desejamos instalar. <br>
O NPM carregará e, ao final da instalação, o Angular CLI estará disponível para uso no terminal. Para testar se a instalação foi bem sucedida, podemos verificar a versão do CLI utilizando o seguinte comando: `$ ng version`

## Criando o projeto
Para criar um projeto com angular, utilizamos o seguinte comando no terminal: `ng new nome-do-projeto`. 

## Criando os componentes
Execute `$ ng generate component nome-do-componente` ou simplesmente `$ ng g c nome-do-componente`.

## Servidor de desenvolvimento
Digite no terminal `$ ng serve` e navegue até `http://localhost:4200/`. O app irá automcaticamente recarregar caso você mude qualquer arquivo. <br>
Podemos executar em outra porta também adicionando `-port` no final. Ficando assim: `$ ng serve -port 4201`.

## Rodar testes unitários
Rode `$ ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Observações
Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 8.3.3.
Você pode usar também os comandos: `ng generate directive|pipe|service|class|guard|interface|enum|module`.
