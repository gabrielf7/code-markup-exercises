function carregar() { 
  // Buscar Elementos do HTML
  let getById = (element) => window.document.getElementById(element);
  let selectClass = (element) => window.document.querySelectorAll(`.${element}`);
  let areaLinkHTML = getById("areaLinkHTML"); 
  let areaLinkCSS = getById("areaLinkCSS"); 
  let areaLinkCursos = getById("areaLinkCursos"); 
  let btnModoCE = getById("btnModoCE");
  
  // Definir processos
  let url_atual = window.location.href;
  let darkMode_elementos = [ 
    { class01: 'bgEscuro', qualificarAtributo: "class", class02: "bgEstiloEscuro" }, 
    { class01: 'titulo', qualificarAtributo: "class", class02: "h1EstiloEscuro" }, 
    { class01: 'freepikEm', qualificarAtributo: "class", class02: "freepikEmEstiloEscuro" },
    { class01: 'freepikStrong', qualificarAtributo: "class", class02: "freepikStrongEstiloEscuro" }, 
    { class01: 'mainEstilo', qualificarAtributo: "class", class02: "mainEstiloEscuro" },
  ];

  // Aplicar o Dark Mode e o Light Mode com a subtituição da class (do HTML) por outra class
  function EstiloDeModo(modo) {
    for (let indexDarkMode = 0; indexDarkMode < darkMode_elementos.length; indexDarkMode++) {
      let atributo01 = `${darkMode_elementos[indexDarkMode].qualificarAtributo}`;
      let atributo02; let pClass; 
      if(modo === "escuro") {
        pClass = selectClass(darkMode_elementos[indexDarkMode].class01);
        atributo02 = `${darkMode_elementos[indexDarkMode].class02}`;
      } else if(modo === "claro") {
        pClass = selectClass(darkMode_elementos[indexDarkMode].class02);
        atributo02 = `${darkMode_elementos[indexDarkMode].class01}`;
      }

      let estiloCom01 = pClass[0].setAttribute(atributo01, atributo02);
      let estiloComMaisDe01 = pClass.forEach(element => element.setAttribute(atributo01, atributo02));
      pClass.length == 1 ? estiloCom01 : estiloComMaisDe01;
    }
  }

  // Mudar status do evento do EventListener
  function MudarEvento(Evento01, Evento02) {
    btnModoCE.removeEventListener("click", Evento01), btnModoCE.addEventListener("click", Evento02);
  }

  // Aplicar o Light Mode
  function ModoClaro() {
    btnModoCE.setAttribute("class", "btnModoEscuro");
    btnModoCE.innerHTML = "Modo Escuro";
    EstiloDeModo("claro");
    MudarEvento(ModoClaro, ModoEscuro);
  }
  
  // Aplicar o Dark Mode
  function ModoEscuro() {
    btnModoCE.setAttribute("class", "btnModoClaro");
    btnModoCE.innerHTML = "Modo Claro";
    EstiloDeModo("escuro");
    MudarEvento(ModoEscuro, ModoClaro);
  }
  btnModoCE.addEventListener('click', ModoEscuro);

  // Criar links das aplicações dos exercícios
  function CriarLink(link, linkTitulo, pGetById){
    let inserirConteudo = `
      <a class="buttonLink" href="${url_atual}${link}" target="blank_">${linkTitulo}</a>
    `;
    pGetById.innerHTML += inserirConteudo;
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
