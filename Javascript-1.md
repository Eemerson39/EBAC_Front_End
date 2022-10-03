##JavaScript
- Estado do JS(https://2020.stateofjs.com/en-US/technologies/)
- Onde é executado
- Onipresente na web
- APP hibridos
- Aplicação de ponta-a-ponta: banco de dados, back-end / front-end 
- Interagir com DOM (api-web)
- Requisições dinamicas
- IoT (Internet das Coisas): o JS está presente em tudo
- ECMAscript


##Fundamentos JS
- Fundamentos de JavaScript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base


##Metodologia 
- Metodo progrressivo e integrado
- Conceitos de modo progressivo, seguindo uma linha de evolução 
- Começa facil e vai aumentando a acomplexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades


##Lógica de Programação 
- Computador:
  -- Máquina que extrai dados
  -- Processos: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultado do processamento
- Processamento de dados: Entrada(dados) > Processamento > saída(informação)
E a lógica?
Lógica é aquilo que faz sentido

COMO ESCREVER UM PROGRAMA?
- Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução

A LÓGICA DE PROGRAMAÇÃO?
- É a tecnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
- A sequencia de passos, instruções que o computador deve seguir é conhecida como ALGORITMO

ALGORITMO
- Sequncia lógica e finita de instruções que resolvem um problema
- Exemplo: receita de bolo, manual de instruções
- Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritmo
- Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagens de programação 


###Algoritmo para calcular a média de 3 números
1 - Inicio
2 - Receber o primeiro número: entrada 1;
3 - Receber o segundo número: entrada 2;
4 - Receber o terceiro número: entrada 3;
5 - Processamento: somar os 3 números recebidos e dividir por três: (1+2+3)/3;
6 - Exibir o resultado: print, echo, console.log;
7 - Fim


###Torre de Hanoi
- Mover todos os discos para a direita, com o menor número de movimentos possível, 
  sem colocar um disco em cima de um disco menor: https://www.somatematica.com.br/jogos/hanoi/
  Jogos: https://www.somatematica.com.br/jogos.php


##Funcionalidades gerais
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos(clique, submit), estilos CSS 
- Node.js: framework JS para back-end / runtime em JS
- Mongo.db / GraphilQL: banco de dados em JS 
- React / Vue.js / Angular: frameworks JS para desenvolvimento web/mobile
- React Native: framework JS para desenvolvimento mobile
- Recebe e manipula dados 
- Tomar decisões baseadas na lógica computacional
- Loop e interações
- Condições de saída


###Executar o JS
- Console browsers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/


 ###Instalação do Node.js 
- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://node.js.org/pt-br/download/package-manager/

*WINDOWS: Primeiro instalar o chocolatery
- Precisa executar o Powershell como administrador
- Se tudo der certo na instalação do Chocolatery, rodar: choco install nvs
- nvs add lts
- $ nvs use lts
PATH - =%LOCALAPPDATA%\nvs\default
PATH + =%LOCALAPPDATA%\nvs\node\14.17.0\x64

*MacOs: Primeiro instalar o Homebrew
- Se tudo der certo na instalação do Homebrew, rodar: brew install node


####Após concluir a instalação
Rodar em um novo terminal: node -v


##Variáveis
São utilizados para referenciar espaço na memória
- var
- const (fica com valor imutável)
- let
- string (tipo de variável para conjunto de caracteres)
- tipagem: número ou string
- array: conjunto de valores


##Operadores
- Soma +
- Subtração - 
- Multiplicar *
- Dividir /
- Módulo (resto de divisão) %
- Math: random(), round(), sqrt().

*Atribuição
a = b 
a += b
a -= b
a *= b
a /= b
a %= b 

*Operadores de Comparação
- Igual == ou ===
- Diferente !=
- Maior que >
- Maior ou igual >=
- Menor que < 
- Menor ou igual <=

https://developer.mozilla.org/pt-BR/docs/web/JavaScript/Guide/Expressions_and_operators