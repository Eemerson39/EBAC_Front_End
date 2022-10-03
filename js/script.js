function calcularMedia(notas) {
    var soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

var media; // escopo global
function aprovacao( notas ) {
    var media = calcularMedia(notas); // escopo da função

    var condicao = media <= 7 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - ' + condicao;
}

// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNuumero > 0)
        contagemRegressiva(proximoNumero);
}

//contagemRegressiva(50);

document.addEventListener('submit', function( evento ) {
    evento.preventDefault();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
    }

    console.log(objeto);
})