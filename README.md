# Para Moh · Sete meses de nós 🤍

Um presente delicado e romântico para celebrar 13 de outubro de 2026, sete meses desde 13 de março. Feito em HTML, CSS e JavaScript, sem dependências de instalação.

## O presente

- Envelope interativo com a abertura escolhida.
- Sete cartas em uma janela acessível por teclado, com progresso salvo neste navegador.
- Espaços para três fotos e duas datas da história de vocês.
- Contagem de dias no fuso de São Paulo.
- Carta final e um convite para um encontro.
- Layout para celular e computador, com respeito à preferência de movimento reduzido.

## Ver no computador

Com Node.js instalado, execute `npm start` e abra http://127.0.0.1:4173. Ou abra `dist/index.html` diretamente no navegador.

## Personalizar

Edite `dist/content.js` para adaptar as sete cartas. As mensagens são sugestões: revise para que reflitam suas palavras e sua história. O texto de abertura aprovado está em `dist/index.html`.

Coloque fotos em `dist/photos/` e substitua cada `src: null` por um caminho como `src: 'photos/nossa-foto.jpg'`. Os espaços atuais são cartões ilustrados, não fotos de vocês. A legenda fica no campo `caption`.

O convite final pode ser editado em `dist/index.html` quando o lugar e o horário forem escolhidos. Não há música configurada: ainda não foi escolhida uma faixa.

## Publicar

A pasta `dist` pode ser hospedada como site estático. Para usar GitHub Pages, selecione uma publicação por GitHub Actions e envie o conteúdo de `dist` como artefato do Pages. Criar o repositório não ativa a hospedagem automaticamente.

As fontes vêm do Google Fonts, com fontes locais de fallback. Nenhuma foto é enviada pelo app. O repositório público torna seus arquivos e textos visíveis para qualquer pessoa.

## Verificar

Execute `npm run check` para verificar a sintaxe do JavaScript.
