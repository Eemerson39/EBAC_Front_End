# Bootstrap
- Framework ou biblioteca de desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile-first
- Amplamente utilizada
- Cross browser

## Biblioteca x Framework
- Biblioteca: oferece objetos / classes prontas para uso
- Framework: oferece um conjunto de bibliotecas
- Bilbioteca: recurso para trabalhar
- Framework: metodologia de trabalho
- Biblioteca: te leva ao destino
- Framework: te ensina a chegar

## Desenvolvimento ágil
- Metodologias: Scrum, Kanban, XP
- Entrega de valor para o negócio
- Cíclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas
- MVP - Mínimo Produto Viável
- Estar envolvido x comprometido

## Vantagens
- Uso simples
- Menos código
- Abstração de estilos
- Documentação completa: http://getbootstrap.com/

## Desvantagens
- Uso excessivo
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap
```
 <a class="btn btn-lg">Botão</a>
```

### Sem Bootsrap
```
<a class="botao botao-grande">botão</a>

<style>
html {
    font-size: 62.5%
}

.botao {
    background-color: #ccc;
    border-radius: 2px;
    display: block;
    font-family: sans-serif;
    fontsize: 1.6rem;
    padding: 1rem 2rem;
    margin: 5px auto;
    ...
}

.botao.grande {
    font-size: 2rem;
}

.botao:hover {...}
.botao:active {...}
.botao:visited {...}

</style>
```

## Componentes
- Blocos / Modelos / Templates reútilizaveis

## Helpers
- Funções básicas
- Incrementos
- Ajustes

## Font Awesome
- Biblioteca de ícones

## Exercício
- incluir carousel na home antes de sobre
- completar o cadastro, tornando os campos obrigatorios
- incluir campos: bairro, complemento e telefone
