/* js/25-highlight.js — Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTML, CSS, JavaScript/TypeScript, JSON, Python, Markdown, SQL, YAML/.env e Shell. Sem biblioteca externa
   (era app/js/30-highlight.js)
   A FAZER: peça este arquivo à IA com o pedido abaixo (está também na RECEITA.md).

   # 🧬 Receita para recriar: Mini SK
   
   _Gerada sem IA, lendo 95 arquivo(s). Serve para remontar este app como HTML modular — com qualquer IA, um arquivo por vez._
   
   ## 1. O que é
   
   - **Nome:** Mini SK
   - **Partes de código:** 46 (2 tela, 43 logica, 0 servidor, 0 dados, 1 estilo)
   - **Tem servidor (rotas /api):** não — dá para ser só HTML
   - **Peças de fora (bibliotecas):**  + JSON.stringify(principal) + ,  + q + u + q + , child_process, crypto, electron, fs, http, net, os, path, react, react-dom, url, ws
   
   ## 2. Estrutura modular proposta
   
   
   index.html            ← a página; chama os módulos NA ORDEM
   css/app.css           ← o visual
   js/00-core.js         ← a "locomotiva": cria window.APP (registrar, guardar, avisar)
   js/10-conta.js        ← Mini SK — 04-conta.js SEM login, SEM nuvem, SEM banco de dados. Tudo f (era app/js/04-conta.js)
   js/15-fs.js           ← Mini SK — 10-fs.js Projetos e arquivos. Cada projeto fica salvo no nav (era app/js/10-fs.js)
   js/20-zip.js          ← Mini SK — 20-zip.js Lê e cria arquivos .zip SEM biblioteca externa (fu (era app/js/20-zip.js)
   js/25-highlight.js    ← Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTM (era app/js/30-highlight.js)
   js/30-editor.js       ← Mini SK — 40-editor.js O editor de código: abas, cores, números de lin (era app/js/40-editor.js)
   js/35-tree.js         ← Mini SK — 50-tree.js Árvore de arquivos: pastas dentro de pastas, cria (era app/js/50-tree.js)
   js/40-preview.js      ← Mini SK — 60-preview.js Preview ao vivo, sempre na parte de baixo (pod (era app/js/60-preview.js)
   js/45-tsx.js          ← Mini SK — 61-tsx.js ⚛️ Prévia de UM componente .tsx / .jsx (do jeito d (era app/js/61-tsx.js)
   js/50-search.js       ← Mini SK — 70-search.js Buscar (e trocar) em todos os arquivos do proje (era app/js/70-search.js)
   js/55-ai.js           ← Mini SK — 80-ai.js IA para ajudar a escrever código. - Chaves: cole qu (era app/js/80-ai.js)
   js/60-gasto.js        ← Mini SK — 81-gasto.js 💰 Quanto a IA está gastando. - Depois de cada r (era app/js/81-gasto.js)
   js/65-voz.js          ← Mini SK — 83-voz.js 🗣️ Voz e modo conversa (igual ao jurídico): - Voz (era app/js/83-voz.js)
   js/70-ponte.js        ← Mini SK — 84-ponte.js 🔗 Ponte com os outros apps (cada um continua se (era app/js/84-ponte.js)
   js/75-checkpoints.js  ← Mini SK — 85-checkpoints.js Pontos de volta. Uma "foto" de todos os ar (era app/js/85-checkpoints.js)
   js/80-terminal.js     ← Mini SK — 86-terminal.js ⌨️ Terminal leve, ligado à ÁRVORE do projeto. (era app/js/86-terminal.js)
   js/85-86b-node.js     ← logica (era app/js/86b-node.js)
   js/90-86c-termux.js   ← logica (era app/js/86c-termux.js)
   js/91-86e-atalhos.js  ← Mini SK — 86e-atalhos.js ⚡ Comandos prontos para os terminais (⚡ Node  (era app/js/86e-atalhos.js)
   js/92-86f-pasta-viva.js← Mini SK — 86f-pasta-viva.js   (SÓ no Mini SK para PC) 📁 PASTA VIVA: i (era app/js/86f-pasta-viva.js)
   js/93-links.js        ← Mini SK — 87-links.js 🔗 Meus Links: guarda os endereços dos seus PWAs (era app/js/87-links.js)
   js/94-inventario.js   ← logica (era app/js/88-inventario.js)
   js/95-config.js       ← Mini SK — 89-config.js ⚙️ Configuração: 🔑 Cofre de chaves (IA, GitHub (era app/js/89-config.js)
   js/96-github.js       ← Mini SK — 90-github.js Repositório no GitHub, direto do navegador (sem (era app/js/90-github.js)
   js/97-acoes.js        ← Mini SK — 91-acoes.js ⚙️ Execuções no GitHub (Actions) — dentro do pai (era app/js/91-acoes.js)
   js/98-playground.js   ← Mini SK — 92-playground.js ▶️ Playground isolado, que abre ao lado (nã (era app/js/92-playground.js)
   js/98-conversa.js     ← Mini SK — 93-conversa.js 🧩 Desembaralhar conversa: lê uma conversa co (era app/js/93-conversa.js)
   js/98-fatiador.js     ← Mini SK — 94-fatiador.js ✂️ Fatiador: pega um arquivo grande (JS, TS,  (era app/js/94-fatiador.js)
   js/98-pwa.js          ← logica (era app/js/95-pwa.js)
   js/98-apk.js          ← logica (era app/js/96-apk.js)
   js/98-96b-eas.js      ← logica (era app/js/96b-eas.js)
   js/98-96c-preparar.js ← logica (era app/js/96c-preparar.js)
   js/98-analise.js      ← logica (era app/js/97-analise.js)
   js/98-api.js          ← Mini SK — 98-api.js 🧪 Testador da API do próprio projeto (o servidor  (era app/js/98-api.js)
   js/98-expo-core.js    ← expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Us (era app/js/lib/expo-core.js)
   js/98-plano-core.js   ← logica (era app/js/lib/plano-core.js)
   js/98-receita-core.js ← receita-core.js — 🧬 Receita para recriar um projeto (sem IA). Lê os a (era app/js/lib/receita-core.js)
   js/98-selar.js        ← Mini SK — js/lib/selar.js "Tranca" um segredo do jeito que o GitHub ex (era app/js/lib/selar.js)
   js/98-ponte.js        ← Ponte de arquivos do Mini SK — no PC, o próprio programa liga (no celu (era electron/ponte.cjs)
   js/98-terminal.js     ← Terminal do computador para o Mini SK — fala o mesmo "idioma" do ttyd  (era electron/terminal.cjs)
   js/98-preload.js      ← Conta para o Mini SK que ele está no PC (terminal e ponte já ligados p (era electron/preload.cjs)
   js/98-app.js          ← Mini SK (era app/index.html)
   js/98-inicio.js       ← Mini-SK-PC-17-10-a (1) — Mini-SK-PC-17-10-a (1) (era index.html)
   js/99-app.js          ← o último: monta a tela com o que embarcou
   
   
   ## 3. As partes, uma por uma
   
   | # | Era | Vira | Tipo | O que faz | Usa |
   |---|---|---|---|---|---|
   | 1 | `app/js/00-core.js` | css/app.css | logica | Mini SK — 00-core.js Base de tudo: atalhos, eventos, avisos, janelas de confirmação e o ba | — |
   | 2 | `app/js/04-conta.js` | `js/10-conta.js` | logica | Mini SK — 04-conta.js SEM login, SEM nuvem, SEM banco de dados. Tudo fica só neste aparelh | — |
   | 3 | `app/js/10-fs.js` | `js/15-fs.js` | logica | Mini SK — 10-fs.js Projetos e arquivos. Cada projeto fica salvo no navegador (IndexedDB).  | — |
   | 4 | `app/js/20-zip.js` | `js/20-zip.js` | logica | Mini SK — 20-zip.js Lê e cria arquivos .zip SEM biblioteca externa (funciona offline). Usa | — |
   | 5 | `app/js/30-highlight.js` | `js/25-highlight.js` | logica | Mini SK — 30-highlight.js Cores do código (realce de sintaxe) para HTML, CSS, JavaScript/T | — |
   | 6 | `app/js/40-editor.js` | `js/30-editor.js` | logica | Mini SK — 40-editor.js O editor de código: abas, cores, números de linha, Tab/Enter inteli | — |
   | 7 | `app/js/50-tree.js` | `js/35-tree.js` | logica | Mini SK — 50-tree.js Árvore de arquivos: pastas dentro de pastas, criar, renomear, duplica | — |
   | 8 | `app/js/60-preview.js` | `js/40-preview.js` | logica | Mini SK — 60-preview.js Preview ao vivo, sempre na parte de baixo (pode aumentar, diminuir | — |
   | 9 | `app/js/61-tsx.js` | `js/45-tsx.js` | logica | Mini SK — 61-tsx.js ⚛️ Prévia de UM componente .tsx / .jsx (do jeito dos sites de "playgro | — |
   | 10 | `app/js/70-search.js` | `js/50-search.js` | logica | Mini SK — 70-search.js Buscar (e trocar) em todos os arquivos do projeto. Cada resultado m | — |
   | 11 | `app/js/80-ai.js` | `js/55-ai.js` | logica | Mini SK — 80-ai.js IA para ajudar a escrever código. - Chaves: cole qualquer chave, o prov | — |
   | 12 | `app/js/81-gasto.js` | `js/60-gasto.js` | logica | Mini SK — 81-gasto.js 💰 Quanto a IA está gastando. - Depois de cada resposta: tokens de e | — |
   | 13 | `app/js/83-voz.js` | `js/65-voz.js` | logica | Mini SK — 83-voz.js 🗣️ Voz e modo conversa (igual ao jurídico): - Voz: Francisca (neural) | — |
   | 14 | `app/js/84-ponte.js` | `js/70-ponte.js` | logica | Mini SK — 84-ponte.js 🔗 Ponte com os outros apps (cada um continua separado, sem bagunça) | — |
   | 15 | `app/js/85-checkpoints.js` | `js/75-checkpoints.js` | logica | Mini SK — 85-checkpoints.js Pontos de volta. Uma "foto" de todos os arquivos do projeto. - | — |
   | 16 | `app/js/86-terminal.js` | `js/80-terminal.js` | logica | Mini SK — 86-terminal.js ⌨️ Terminal leve, ligado à ÁRVORE do projeto. Funciona no celular | — |
   | 17 | `app/js/86b-node.js` | `js/85-86b-node.js` | logica | ehSite, lacreLigado, registrarSW, ligarLacre | — |
   | 18 | `app/js/86c-termux.js` | `js/90-86c-termux.js` | logica | status, carregarScript, carregarCss, prepararTela | — |
   | 19 | `app/js/86e-atalhos.js` | `js/91-86e-atalhos.js` | logica | Mini SK — 86e-atalhos.js ⚡ Comandos prontos para os terminais (⚡ Node e 📱 Termux): um toq | — |
   | 20 | `app/js/86f-pasta-viva.js` | `js/92-86f-pasta-viva.js` | logica | Mini SK — 86f-pasta-viva.js   (SÓ no Mini SK para PC) 📁 PASTA VIVA: igual ao VS Code. Cad | — |
   | 21 | `app/js/87-links.js` | `js/93-links.js` | logica | Mini SK — 87-links.js 🔗 Meus Links: guarda os endereços dos seus PWAs e sites num lugar s | — |
   | 22 | `app/js/88-inventario.js` | `js/94-inventario.js` | logica | texto, limpaTag, familia, analisar | — |
   | 23 | `app/js/89-config.js` | `js/95-config.js` | logica | Mini SK — 89-config.js ⚙️ Configuração: 🔑 Cofre de chaves (IA, GitHub e "Minhas chaves"). | — |
   | 24 | `app/js/90-github.js` | `js/96-github.js` | logica | Mini SK — 90-github.js Repositório no GitHub, direto do navegador (sem servidor, sem Repli | — |
   | 25 | `app/js/91-acoes.js` | `js/97-acoes.js` | logica | Mini SK — 91-acoes.js ⚙️ Execuções no GitHub (Actions) — dentro do painel 🐙 GitHub. Antes | — |
   | 26 | `app/js/92-playground.js` | `js/98-playground.js` | logica | Mini SK — 92-playground.js ▶️ Playground isolado, que abre ao lado (não é a primeira tela) | — |
   | 27 | `app/js/93-conversa.js` | `js/98-conversa.js` | logica | Mini SK — 93-conversa.js 🧩 Desembaralhar conversa: lê uma conversa copiada do app de IA ( | — |
   | 28 | `app/js/94-fatiador.js` | `js/98-fatiador.js` | logica | Mini SK — 94-fatiador.js ✂️ Fatiador: pega um arquivo grande (JS, TS, TSX, HTML, CSS, Pyth | — |
   | 29 | `app/js/95-pwa.js` | `js/98-pwa.js` | logica | gradFill, shapePath, hexA, content | favicon.ico, icon.svg, apple-touch-icon.png |
   | 30 | `app/js/96-apk.js` | `js/98-apk.js` | logica | wfNome, MainActivity, Ponte, mandar | package.json |
   | 31 | `app/js/96b-eas.js` | `js/98-96b-eas.js` | logica | versaoBase, majorExpo, lerJson, conferir | app.json |
   | 32 | `app/js/96c-preparar.js` | `js/98-96c-preparar.js` | logica | lerJSON, raizPkg, permissoes, analisar | — |
   | 33 | `app/js/97-analise.js` | `js/98-analise.js` | logica | explain, scriptHelp, parseCatalog, analyze | — |
   | 34 | `app/js/98-api.js` | `js/98-api.js` | logica | Mini SK — 98-api.js 🧪 Testador da API do próprio projeto (o servidor rodando no seu PC, e | — |
   | 35 | `app/js/99-app.js` | css/app.css | logica | Mini SK — 99-app.js Junta tudo: barra de cima, gavetas (Arquivos à esquerda; IA, Busca, Ch | estilo.css, app.js |
   | 36 | `app/js/lib/expo-core.js` | `js/98-expo-core.js` | logica | expo-core.js — ☁️ Consertar um projeto EXPO para gerar APK pelo EAS Usado pelo Caça-Bug (D | app.json |
   | 37 | `app/js/lib/plano-core.js` | `js/98-plano-core.js` | logica | ext, uniq, normRota, arvore | — |
   | 38 | `app/js/lib/receita-core.js` | `js/98-receita-core.js` | logica | receita-core.js — 🧬 Receita para recriar um projeto (sem IA). Lê os arquivos, descobre o  | a.js, …, app.css |
   | 39 | `app/js/lib/selar.js` | `js/98-selar.js` | logica | Mini SK — js/lib/selar.js "Tranca" um segredo do jeito que o GitHub exige para guardar em  | — |
   | 40 | `electron/ponte.cjs` | `js/98-ponte.js` | logica | Ponte de arquivos do Mini SK — no PC, o próprio programa liga (no celular, roda no Termux) | — |
   | 41 | `electron/terminal.cjs` | `js/98-terminal.js` | logica | Terminal do computador para o Mini SK — fala o mesmo "idioma" do ttyd (o do Termux), então | — |
   | 42 | `electron/main.cjs` | css/app.css | logica | Mini SK para PC — abre o Mini SK numa janela própria e liga, por dentro: - o 💻 Terminal d | ponte.cjs, terminal.cjs |
   | 43 | `electron/preload.cjs` | `js/98-preload.js` | logica | Conta para o Mini SK que ele está no PC (terminal e ponte já ligados pelo programa) | — |
   | 44 | `app/css/app.css` | css/app.css | estilo | Mini SK — app.css   (tema escuro, celular e computador) | — |
   | 45 | `app/index.html` | `js/98-app.js` | tela | Mini SK | app.css, manifest.json, favicon.ico, icon.svg |
   | 46 | `index.html` | `js/98-inicio.js` | tela | Mini-SK-PC-17-10-a (1) — Mini-SK-PC-17-10-a (1) | manifest.json, favicon.ico, icon.svg, apple-touch-icon.png |
   
   ## 4. Montar passo a passo (cada bloco é um pedido pronto: 📋 Copiar → colar na IA)
*/
(function (APP) {
  APP.registrar({
    nome: "30-highlight",
    icone: "🧩",
    abrir(tela) { tela.innerHTML = "<p>30-highlight: ainda em construção.</p>"; },
  });
})(window.APP);
