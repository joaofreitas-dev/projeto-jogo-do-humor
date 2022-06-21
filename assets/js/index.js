const title1 = document.createTextNode("Fase: Estudante dedicado");
const title2 = document.createTextNode("Fase: Não sei o que fazer");
const title3 = document.createTextNode("Fase: Contratado");

const text1 = document.createTextNode(
  "GitBook em dia, projeto em andamento, conteúdo está “mamão com açúcar."
);

const text2 = document.createTextNode(
  "GitBook atrasado, projeto travado e chegando a data de entrega e o conteúdo não entra na cabeça nem com reza brava."
);

const text3 = document.createTextNode(
  "A fase que todo estudante almeja. Os dias de glória finalmente chegarão, foi trabalhoso mas consegui."
);

let container = document.querySelector(".container-div");
const title = document.querySelector(".title-card");
const image = document.querySelector(".image-card");
const text = document.querySelector(".text-card");
let button = document.querySelector(".btn-card");
let fase = "fase-1";

button.addEventListener("click", () => {
  if (fase === "fase-1") {
    title.innerHTML = "";
    title.appendChild(title1);
    image.src = "/assets/img/homer-lendo.jpg";
    text.appendChild(text1);
    fase = "fase-2";
    button.innerHTML = "Próxima Fase";
  } else if (fase === "fase-2") {
    title.innerHTML = "";
    title.appendChild(title2);
    image.src = "/assets/img/homer-lendo.gif";
    text.innerHTML = "";
    text.appendChild(text2);
    fase = "fase-3";
    button.innerHTML = "Próxima Fase";
  } else if (fase === "fase-3") {
    title.innerHTML = "";
    title.appendChild(title3);
    image.src = "/assets/img/homer-presidente.webp";
    text.innerHTML = "";
    text.appendChild(text3);
    fase = "fase-1";
    button.innerHTML = "Voltar ao Início";
  }
});

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
      this.navLinks.forEach((link, index) => {
          link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
  }

  handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
  }


  init() {
      if (this.mobileMenu) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();
