# Para Moh · Sete meses de nós 🤍

Um presente delicado e romântico para celebrar 13 de outubro de 2026, sete meses desde 13 de março. Feito em HTML, CSS e JavaScript, sem dependências de instalação.

## O presente

- Envelope interativo com a abertura escolhida.
- Sete cartas em uma janela acessível por teclado, com progresso salvo neste navegador.
- Galeria com cinco fotos de vocês e duas datas da sua história.
- Contagem de dias no fuso de São Paulo.
- Carta final com uma mensagem de amor e gratidão para Moh.
- Layout para celular e computador, com respeito à preferência de movimento reduzido.

## Ver no computador

Com Node.js instalado, execute `npm start` e abra http://127.0.0.1:4173. Ou abra `dist/index.html` diretamente no navegador.

## Personalizar

Edite `dist/content.js` para adaptar as sete cartas. As mensagens são sugestões: revise para que reflitam suas palavras e sua história. O texto de abertura aprovado está em `dist/index.html`.

As cinco fotos estão em `dist/photos/`. Para adicionar ou trocar fotos, edite a lista `photos` em `dist/content.js`, usando um caminho como `src: 'photos/nossa-foto.jpg'`. A legenda fica no campo `caption`. O campo `sideways: true` apresenta a foto girada para a esquerda, sem alterar o arquivo original.

A mensagem final de amor e gratidão pode ser editada em `dist/index.html`. Não há música configurada: ainda não foi escolhida uma faixa.

## Publicar

A pasta `dist` pode ser hospedada como site estático. Para usar GitHub Pages, selecione uma publicação por GitHub Actions e envie o conteúdo de `dist` como artefato do Pages. Criar o repositório não ativa a hospedagem automaticamente.

As fontes vêm do Google Fonts, com fontes locais de fallback. Nenhuma foto é enviada pelo app. O repositório público torna seus arquivos e textos visíveis para qualquer pessoa.

## Verificar

Execute `npm run check` para verificar a sintaxe do JavaScript.
