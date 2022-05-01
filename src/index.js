function carregar() { 
  let getById = (element) => window.document.getElementById(element);
  let areaLinkHTML = window.document.getElementById("areaLinkHTML"); 
  let areaLinkCSS = window.document.getElementById("areaLinkCSS"); 
  let areaLinkCursos = window.document.getElementById("areaLinkCursos"); 
  let btnModoCE = window.document.getElementById("btnModoCE");
  let url_atual = window.location.href;

  function MudarEvento(Evento01, Evento02) {
    btnModoCE.removeEventListener("click", Evento01), btnModoCE.addEventListener("click", Evento02);
  }

  function ModoClaro() {
    btnModoCE.setAttribute("class", "btnModoEscuro");
    btnModoCE.innerHTML = "Modo Escuro";
    getById("bgEscuro").removeAttribute("class", "bgEstiloEscuro");
    getById("titulo").removeAttribute("class", "h1EstiloEscuro");

    getById("freepikEm").removeAttribute("style", "");
    getById("freepikStrong").removeAttribute("style", "");
    getById("main01").removeAttribute("style", "");
    getById("main02").removeAttribute("style", "");
    getById("main03").removeAttribute("style", "");
    MudarEvento(ModoClaro, ModoEscuro);
  }

  function ModoEscuro() {
    btnModoCE.setAttribute("class", "btnModoClaro");
    btnModoCE.innerHTML = "Modo Claro";
    getById("bgEscuro").setAttribute("class", "bgEstiloEscuro");
    getById("titulo").setAttribute("class", "h1EstiloEscuro");

    getById("freepikEm").setAttribute("style", "color: white;");
    getById("freepikStrong").setAttribute("style", "color: rgba(253, 36, 2, 0.9);");
    getById("main01").setAttribute("style", " background-color: rgb(48, 105, 122);");
    getById("main02").setAttribute("style", " background-color: rgb(48, 105, 122);");
    getById("main03").setAttribute("style", " background-color: rgb(48, 105, 122);");
    MudarEvento(ModoEscuro, ModoClaro);
  }
  btnModoCE.addEventListener('click', ModoEscuro);

  function CriarLink(link, linkTitulo, getById){
    let inserirConteudo = `
      <a class="buttonLink" href="${url_atual}${link}" target="blank_">${linkTitulo}</a>
    `;
    getById.innerHTML += inserirConteudo;
  }
  // HTML
  CriarLink("/html/exibir-video-youtuber.html", "Vídeo do youtuber", areaLinkHTML);
  // CSS
  CriarLink("/css/efeito-borrado/efeito-borrado.html", "Efeito Borrado", areaLinkCSS);
  CriarLink("/css/reflexo-espelho/reflexo-espelho.html", "Reflexo de Espelho", areaLinkCSS);
  CriarLink("/css/template-colunas/teste-template.html", "Template de Colunas", areaLinkCSS);
  // Cursos
}
window.addEventListener('load', carregar);
