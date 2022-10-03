# Operadores


## Aritméticos: retornam o resultado de uma operação
+   somar
-   subtrair
*   multiplicar
/   dividir
%   resto de divisão


## Comparadores matemáticos: teste lógico, retorno booleano (true / false):
<   menor que
>   maior que
<=  menor ou igual
>=  maior ou igual


## Comparadores lógicos: teste lógico, retorno booleano (true / false)
==      igualdade entre sentenças (valor)
!=      diferença entre snetenças (valor)
===     igualdade entre sentenças (valor e tipo)
!==     diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

* Atribuição
a = b
a = 4


# Operadores de lógica e junção lógica
!   NÃO (NOT)
&&  E (AND)
||  OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:

a != b      // o valor de a é diferente de b 
x !== Y    // o valor e o tipo de x são diferentes de y
!a == b     // o valor de a não é igual ao valor de b 



#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0



#### Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";



## If 
if (...) {

}

## Else
else {

}

## Else if
else if (...) {

}

* Exemplo
if (cor == 'preto'){
    meuCarro = 'preto';
} else if (cor == 'vermelho'){
    meuCarro = 'cinza';
} else if (cor == 'amarelo'){
    meuCarro = 'branco';
} else {
    meuCarro = 'azul';
}



## Switch

switch (cor) {
    case 'branco' :
       meuCarro = 'branco'
       break;
    case 'vermelho' :
        meuCarro = 'vermelho'
        break;
    case 'amarelo' :
        meuCarro = 'amarelo'
        break;
    default :
         console.log('não temos a cor desejada');
}


## Cálculo média de aluno4
...

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var  media =(nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 8){
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}



## Laços de Repetição (loops)

...

for([expressãoInicial]; [condição]; [incremento]){
    execução
}

while( [condicao] ) {
    [execucao]
}

do {[execucao]
} while ([condição])

//fazer a revisão do carro aos 10 km
var km;
var revisao = 3;

for(km = 0; km <= revisao; km++){
    console.log("apenas " + km + "kms então pode rodar");
}



### Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

for (var i = 0; i < alunos.length; i++){
    nota = 0
    aluno = alunos[i]
    console.log("Aluno: " + aluno[i]);

    for( c = 0; c < aluno.length; c++ ){
        nota = aluno[c];
    }

    media = nota / 4;

    if(media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }
    console.log("Media: " + media + " - " + resultado);
}



## Funções

- Evitar a repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calcularMedia( notas ) {
    var soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

var media; // escopo global
function aprovacao( notas ){
var media = calcularMedia( notas ); // escopo da função

var condicao = media <= 7 ? "aprovado" : "reprovado";

return 'Média: ' + media + ' - ' + condicao;
}
 
// console.log()

//console.log( "Média: " + calcularMedia([8, 8, 7]))
//console.log( aprovacao(calcularMedia([8, 8, 7])))
console.log( aprovacao([8, 8, 7]));

//console.log( "Média: " + calcularMedia([8, 8, 10, 6]))
//console.log( aprovacao(calcularMedia([8, 8, 10, 6])))
console.log( aprovacao([8, 8, 10, 6]));

//console.log( "Média: " + calcularMedia([9, 6]))
//console.log( aprovacao(calcularMedia([9, 6])))
console.log( aprovacao([9, 6]));