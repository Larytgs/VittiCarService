//Parte do header, diminui o tamanho do menu no momento em que houver scroll

const menu = document.querySelector("#menu");
const img = document.querySelector("#logo");
const h1 = document.querySelector(
  ".headerIndexH1, .headerServiçosh1, .headerBlogH1, .headerQSomosH1, .headerMarcasH1, .headerLCarH1, .headerContatosh1"
);

const main = document.querySelector(".corpo");

function diminuirMenu() {
  if (window.scrollY > 60) {
    //header pqno
    menu.style.height = "110px";
    menu.style.position = "fixed";

    // Condição para a imagem no tamanho da tela (responsividade)
    if (window.innerWidth < 799) {
      // Telas pequena
      img.style.height = "70px";
      img.style.width = "70px";
      img.style.margin = "10px 30px";
    } else {
      // Para telas maiores
      img.style.height = "90px";
      img.style.width = "90px";
      img.style.margin = "10px 100px";
    }

    main.style.paddingTop = "50vh";
    h1.style.display = "none";
  } else {
    //header grande
    menu.style.height = "100vh";
    menu.style.position = "fixed";

    // Condição para a imagem no tamanho da tela (responsividade)
    if (window.innerWidth < 799) {
      // Telas menores
      img.style.height = "100px";
      img.style.width = "100px";
      img.style.margin = "10px 30px";
    } else {
      // Para telas maiores
      img.style.height = "150px";
      img.style.width = "150px";
      img.style.margin = "10px 30px";
    }

    main.style.paddingTop = "0";
    h1.style.display = "block";
  }
}

// Verifica a largura da tela e esconder o header grande se a largura for menor que 659px
function ajustarHeaderPorTamanho() {
  if (window.innerWidth < 659) {
    menu.style.height = "110px";
    menu.style.position = "fixed";

    img.style.height = "70px";
    img.style.width = "70px";
    img.style.margin = "10px 30px";

    h1.style.display = "none";

    main.style.marginTop = "110px"; // <- Adicionado
  } else {
    menu.style.height = "100vh";
    menu.style.position = "fixed";

    img.style.height = "150px";
    img.style.width = "150px";
    img.style.margin = "10px 30px";

    h1.style.display = "block";

    main.style.marginTop = "110px"; // mesmo aqui, ainda precisa espaço!
  }
}

// Chama a função quando a página carregar
ajustarHeaderPorTamanho();
window.addEventListener("resize", ajustarHeaderPorTamanho);

// Evento de scroll para diminuir o menu apenas em telas maiores
window.addEventListener("scroll", () => {
  if (window.innerWidth >= 659) {
    diminuirMenu();
  }
});

// Garante o estilo correto ao carregar
window.addEventListener("load", ajustarHeaderPorTamanho);

//Para o menu responsivo
function toggleMenu() {
  let menu = document.querySelector("#menuzinho");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Fecha o menu quando um link for clicado
document.querySelectorAll("#menuzinho a").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector("#menuzinho").style.display = "none";
  });
});

//Carrossel LavaCar
const container = document.querySelector(".cardsCarrossel");
let cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth + 10; // Largura do card + gap
let index = 0; // Começa no primeiro card real

// Função para mover o carrossel
function moverCarrossel(direcao) {
  index += direcao;

  // Alternar entre os dois cards (efeito infinito)
  if (index < 0) {
    index = 0;
  } else if (index >= cards.length - 1) {
    index = cards.length - 1;
  }

  container.style.transition = "transform 0.5s ease-in-out";
  container.style.transform = `translateX(${-index * cardWidth}px)`;
}

//Parte da seta subindo
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
