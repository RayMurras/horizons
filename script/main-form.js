function inicializar() {
  clicar("pacotes");
}
function clicar(valor) {
  // Definir todos os links e divs como não destacados e escondidos
  const links = ["pacotes", "voomedida", "voohotel"];
  const divs = ["target-div1", "target-div2", "target-div3"];

  links.forEach((id) => {
    document.getElementById(id).classList.remove("backgroudhover");
  });

  divs.forEach((id) => {
    document.getElementById(id).classList.add("naovisivel");
  });

  // Destacar o link clicado e mostrar a div correspondente
  if (links.includes(valor)) {
    const link = document.getElementById(valor);
    const index = links.indexOf(valor);
    link.classList.add("backgroudhover");
    document.getElementById(divs[index]).classList.remove("naovisivel");
  }
}

// Exemplo de como você poderia chamar a função clicar
document
  .getElementById("pacotes")
  .addEventListener("click", () => clicar("pacotes"));
document
  .getElementById("voomedida")
  .addEventListener("click", () => clicar("voomedida"));
document
  .getElementById("voohotel")
  .addEventListener("click", () => clicar("voohotel"));

function abrirPassageiros(valor) {
  // Definir todos os links e divs como não destacados e escondidos
  const links = ["pass", "pass2"];
  const divs = ["paxgeral", "paxgeral2"];

  divs.forEach((id) => {
    document.getElementById(id).classList.add("naovisivel");
  });
  // Destacar o link clicado e mostrar a div correspondente
  if (links.includes(valor)) {
    const link = document.getElementById(valor);
    const index = links.indexOf(valor);
    document.getElementById(divs[index]).classList.remove("naovisivel");
  }
}

document
  .getElementById("pass")
  .addEventListener("click", () => abrirPassageiros("pass"));
document
  .getElementById("pass2")
  .addEventListener("click", () => abrirPassageiros("pass2"));

function fecharTabelaPax(valor) {
  const links = ["fechar-div-pax-geral", "fechar-div-pax-geral2"];
  const divs = ["paxgeral", "paxgeral2"];

  if (links.includes(valor)) {
    const link = document.getElementById(valor);
    const index = links.indexOf(valor);
    document.getElementById(divs[index]).classList.add("naovisivel");
  }
}
document
  .getElementById("fechar-div-pax-geral")
  .addEventListener("click", () => fecharTabelaPax("fechar-div-pax-geral"));
document
  .getElementById("fechar-div-pax-geral2")
  .addEventListener("click", () => fecharTabelaPax("fechar-div-pax-geral2"));

/*
var qtdAdulto = 1
var qtdCrianca = 0
var qtdAdulto2 = 1
var qtdCrianca2 = 0
let resultadoTela1 = document.getElementById("resultadoNaTela");
let resultadoTela2 = document.getElementById("resultadoNaTela2");
let selecionaAdulto = document.getElementById("selectAdulto");
let selecionaCrianca = document.getElementById("selectCrianca");
let selecionaAdulto2 = document.getElementById("selectAdulto2");
let selecionaCrianca2 = document.getElementById("selectCrianca2");
function selecionarAdulto(valor) {
   qtdAdulto = selecionaAdulto.value;
   qtdAdulto2 = selecionaAdulto2.value;
  if (valor == "selectAdulto") {
    resultadoTela1.innerHTML = `1 Quarto, ${qtdAdulto} Adultos, ${qtdCrianca} Crianças`;
   
  }
  if (valor == "selectAdulto2") {
    resultadoTela2.innerHTML = `1 Quarto, ${qtdAdulto2} Adultos, ${qtdCrianca2} Crianças`;
  }
}

function selecionarCrianca(valor) {
   qtdCrianca = selecionaCrianca.value;
   qtdCrianca2 = selecionaCrianca2.value;
  if (valor == "selectCrianca") {
    resultadoTela1.innerHTML = `1 Quarto, ${qtdAdulto} Adultos, ${qtdCrianca} Crianças`;
  }
  if (valor == "selectCrianca2") {
    resultadoTela2.innerHTML = `1 Quarto, ${qtdAdulto2} Adultos, ${qtdCrianca2} Crianças`;
  }

}*/

// Quantidades iniciais de adultos e crianças
var qtdAdulto = 1;
var qtdCrianca = 0;
var qtdAdulto2 = 1;
var qtdCrianca2 = 0;

// Seleciona os elementos do DOM
let resultadoTela1 = document.getElementById("resultadoNaTela");
let resultadoTela2 = document.getElementById("resultadoNaTela2");
let selecionaAdulto = document.getElementById("selectAdulto");
let selecionaCrianca = document.getElementById("selectCrianca");
let selecionaAdulto2 = document.getElementById("selectAdulto2");
let selecionaCrianca2 = document.getElementById("selectCrianca2");

// Atualiza a tela com as quantidades de adultos e crianças
function atualizarTela(elemento, adultos, criancas) {
  elemento.innerHTML = `1 Quarto, ${adultos} Adultos, ${criancas} Crianças`;
}

// Função chamada ao selecionar adultos
function selecionarAdulto(valor) {
  qtdAdulto = selecionaAdulto.value;
  qtdAdulto2 = selecionaAdulto2.value;

  if (valor === "selectAdulto") {
    atualizarTela(resultadoTela1, qtdAdulto, qtdCrianca);
  }
  if (valor === "selectAdulto2") {
    atualizarTela(resultadoTela2, qtdAdulto2, qtdCrianca2);
  }
}

// Função chamada ao selecionar crianças
function selecionarCrianca(valor) {
  qtdCrianca = selecionaCrianca.value;
  qtdCrianca2 = selecionaCrianca2.value;

  if (valor === "selectCrianca") {
    atualizarTela(resultadoTela1, qtdAdulto, qtdCrianca);
  }
  if (valor === "selectCrianca2") {
    atualizarTela(resultadoTela2, qtdAdulto2, qtdCrianca2);
  }
}

// Adiciona event listeners para as mudanças nos selects
selecionaAdulto.addEventListener("change", () =>
  selecionarAdulto("selectAdulto")
);
selecionaCrianca.addEventListener("change", () =>
  selecionarCrianca("selectCrianca")
);
selecionaAdulto2.addEventListener("change", () =>
  selecionarAdulto("selectAdulto2")
);
selecionaCrianca2.addEventListener("change", () =>
  selecionarCrianca("selectCrianca2")
);
