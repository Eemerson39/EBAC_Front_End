const calcularMedia = (notas) => {
    let soma = 0;
    for (let c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    const media = soma / notas.length;
    return media;
};

let media; // escopo global

const aprovacao = (notas) => {
    const media = calcularMedia(notas); // escopo da função
    const condicao = media >= 8 ? "aprovado" : "reprovado";
    return 'Média: ' + media + ' - Resultado: ' + condicao;
};

// Função Recursiva

const contagemRegressiva = (numero) => {
    console.log(numero);
    const proximoNumero = numero - 1;
    if (proximoNumero > 0)
        contagemRegressiva(proximoNumero);
};

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if (formulario1)
    formulario1.addEventListener('submit', (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        if (formulario1.getAttribute('class').match(/erro/)) {
            return false;
        }

        const dados = new FormData(formulario1);
        const notas = [];

        for (let key of dados.keys()) {
            const numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if (!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);
        const texto = aprovacao(notas);
        document.getElementById('resultado').innerHTML = texto;
    });

const validaCampo = (elemento) => {
    elemento.addEventListener('focusout', (event) => {
        event.preventDefault();

        if (elemento.value == "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            elemento.classList.add('erro');
            elemento.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
        }
    });
};

const validaCampoNumerico = (elemento) => {
    elemento.addEventListener('focusout', (event) => {
        event.preventDefault();
        let numero = elemento.value.match(/^[\d]5-[\d]3/) ? elemento.value.replace(/-/, "") : elemento.value;

        if (numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            elemento.classList.add('erro');
            elemento.parentNode.classList.add('erro');
            return false;
        }
    });
};

const validaEmail = (elemento) => {
    elemento.addEventListener('focusout', (event) => {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if (elemento.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            elemento.classList.add('erro');
            elemento.parentNode.classList.add('erro');
            return false;
        }
    });
};

const camposUf = document.querySelectorAll('input.uf');
for (let emFoco of camposUf) {
    validaUf(emFoco);
}

const vetSiglas = ["ac", "al", "am", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "ro", "rs", "rr", "sc", "se", "sp", "to"];

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposNumericos = document.querySelectorAll('input.numero');
const camposEmail = document.querySelectorAll('input.email');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}