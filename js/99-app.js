// js/99-app.js — O ÚLTIMO: monta o menu com os módulos que embarcaram
(function (APP) {
  const menu = document.getElementById("menu"), tela = document.getElementById("tela");
  APP.modulos.forEach((m) => { const b = document.createElement("button"); b.textContent = (m.icone || "🧩") + " " + m.nome; b.onclick = () => m.abrir(tela); menu.appendChild(b); });
  if (APP.modulos[0]) APP.modulos[0].abrir(tela);
})(window.APP);
