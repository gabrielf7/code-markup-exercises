function carregar() { 
  let areaLinkHTML = window.document.getElementById("areaLinkHTML"); 
  let areaLinkCSS = window.document.getElementById("areaLinkCSS"); 
  let areaLinkCursos = window.document.getElementById("areaLinkCursos"); 
  let url_atual = window.location.href;

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
