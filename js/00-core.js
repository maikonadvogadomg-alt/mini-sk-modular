// js/00-core.js — A LOCOMOTIVA: cria o caixa comum APP (vem primeiro)
window.APP = {
  modulos: [],
  registrar(m) { this.modulos.push(m); },
  guardar(chave, valor) { try { localStorage.setItem("app:" + chave, JSON.stringify(valor)); } catch (e) {} },
  ler(chave, padrao) { try { const v = localStorage.getItem("app:" + chave); return v == null ? padrao : JSON.parse(v); } catch (e) { return padrao; } },
  avisar(t) { const a = document.getElementById("aviso"); a.textContent = t; a.style.display = "block"; clearTimeout(this._t); this._t = setTimeout(() => (a.style.display = "none"), 3000); },
};
