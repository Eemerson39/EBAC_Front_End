# Webpack
- Empacotador de Módulo JS
- Utilizado por diversos frameworks modernos como o React, Angular...
- Trabalha com Node.js

## Instalação

1. Iniciar o projeto no diretório
```
npm init -y
```

2. Instalar o Webpack como dependência de desenvolvimento
```
npm install --save-dev webpack webpack-cli
```


## Trabalhando com HTML
È necessário trabalhar com plugin para ampliar as possibilidades de uso, instalações:

```
npm install --save-dev html-webpack-plugin
```

## Adicionando CSS
Para trabalhar com estilos também compensa adicionar algumas extensões.
- node-sass: compilador de sass para node
- sass-loader: carrega para o webpack compilar
- style-loader: injeta estilos na árvore de objetos (DOM)
- css-loader: interpreta diretivas do CSS (import...)
- extract: extrai CSS do JS

```
npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin