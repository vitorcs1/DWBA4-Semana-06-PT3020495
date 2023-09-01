// Início inserção de Menu Superior e Footer

function inserirMenu() {
  fetch("Menu.html")
    .then((response) => response.text())
    .then((menuHtml) => {
      const menuContainer = document.getElementById("menu_container");
      menuContainer.innerHTML = menuHtml;
    });
}

function inserirFooter() {
  fetch("Footer.html") // Atualize para o caminho correto do arquivo Footer.html
    .then((response) => response.text())
    .then((footerHtml) => {
      const footerContainer = document.getElementById("footer_container"); // Defina o ID correto
      footerContainer.innerHTML = footerHtml;
    });
}
document.addEventListener("DOMContentLoaded", inserirFooter);
document.addEventListener("DOMContentLoaded", inserirMenu);
// Fim inserção de Menu Superior e Footer

function limparFormulario() {
  const forms = document.querySelectorAll("form");
  for (let i = 0; i < forms.length; i++) {
    forms[i].reset();
  }
}
