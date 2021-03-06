function carregar() { 
  // Buscar Elementos do HTML
  let getById = (element) => window.document.getElementById(element);
  let selectClass = (element) => window.document.querySelectorAll(`.${element}`);
  let areaLink00 = getById("areaLink00"); 
  let areaLink01 = getById("areaLink01"); 
  let areaLink02 = getById("areaLink02"); 
  let btnModoCE = getById("btnModoCE");
  
  // Definir processos
  let url_hostname = window.location.hostname;
  let url_all = `http://${url_hostname}/code-markup-exercises/`;
  let link_elementos = [ 
    { area: areaLink00, linkTitulo: "Vídeo do youtuber", link: "html/exibir-video-youtuber.html" },
    { area: areaLink01, linkTitulo: "Efeito Borrado", link: "css/efeito-borrado/efeito-borrado.html" },
    { area: areaLink01, linkTitulo: "Reflexo de Espelho", link: "css/reflexo-espelho/reflexo-espelho.html" },
    { area: areaLink01, linkTitulo: "Template de Colunas", link: "css/template-colunas/teste-template.html" },
    { area: areaLink02, linkTitulo: "HTML5 e CSS3 | Curso em Vídeo", link: "cursos/HTML5CSS3-na-pratica-01-Curso-em-Video/index.html" },
    { area: areaLink02, linkTitulo: "HTML5 - Paulo Andrade | Udemy", link: "cursos/HTML5CSS3-na-pratica-02-Curso-HTML5-para-quem-nao-sabe-nada-de-HTML5/gabrielf7/gabrielf7.html" },
  ];
  let darkMode_elementos = [ 
    { class01: 'bgEscuro', qualificarAtributo: "class", class02: "bgEstiloEscuro" }, 
    { class01: 'titulo', qualificarAtributo: "class", class02: "h1EstiloEscuro" }, 
    { class01: 'freepikEm', qualificarAtributo: "class", class02: "freepikEmEstiloEscuro" },
    { class01: 'freepikStrong', qualificarAtributo: "class", class02: "freepikStrongEstiloEscuro" }, 
    { class01: 'mainEstilo', qualificarAtributo: "class", class02: "mainEstiloEscuro" },
  ];
  btnModoCE.addEventListener('click', ModoEscuro);
  localStorage.getItem("styled", "escuro") ? ModoEscuro() : "";

  // Mudar status do evento do EventListener
  function MudarEvento(Evento01, Evento02) {
    btnModoCE.removeEventListener("click", Evento01), btnModoCE.addEventListener("click", Evento02);
  }

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
  // Aplicar o Light Mode
  function ModoClaro() {
    btnModoCE.setAttribute("class", "btnModoEscuro");
    btnModoCE.innerHTML = "Modo Escuro";
    EstiloDeModo("claro");
    MudarEvento(ModoClaro, ModoEscuro);
    localStorage.removeItem("styled", "escuro");
  }
  // Aplicar o Dark Mode
  function ModoEscuro() {
    btnModoCE.setAttribute("class", "btnModoClaro");
    btnModoCE.innerHTML = "Modo Claro";
    EstiloDeModo("escuro");
    MudarEvento(ModoEscuro, ModoClaro);
    localStorage.setItem("styled", "escuro");
  }

  // Criar o Botão para os links dos exercícios
  function CriarLink(pGetById, linkTitulo, link){
    let inserirConteudo = document.createElement("a");
    inserirConteudo.setAttribute("class", "buttonLink");
    inserirConteudo.href = `${url_all}${link}`;
    inserirConteudo.target = "blank_";
    inserirConteudo.textContent = `${linkTitulo}`;
    pGetById.insertBefore(inserirConteudo, pGetById.nextElementSibling);
  }
  // Exibir os Links
  for (let indexArea = 0; indexArea < link_elementos.length; indexArea++) {
    CriarLink(link_elementos[indexArea].area, link_elementos[indexArea].linkTitulo, link_elementos[indexArea].link);
  }
}
window.addEventListener('load', carregar);
