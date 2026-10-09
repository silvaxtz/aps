
/* ========================================
   APS SOLUÇÕES DIGITAIS
   Configurações do site
======================================== */

const CONFIG = {
  whatsapp: "5583986121371",
  instagram: "https://www.instagram.com/apssolucoesdigitais/"
};


/* ========================================
   WHATSAPP
======================================== */

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const numero = CONFIG.whatsapp.replace(/\D/g, "");

    if (!/^55\d{10,11}$/.test(numero)) {
      alert(
        "Configure o número do WhatsApp no arquivo script.js antes de usar este botão."
      );
      return;
    }

    const servico = link.dataset.service;

    let mensagem = "Olá! Vim pelo site da APS Soluções Digitais e gostaria de saber mais sobre os serviços.";

    if (servico) {
      mensagem = `Olá! Vim pelo site da APS Soluções Digitais e tenho interesse em: ${servico}. Gostaria de mais informações.`;
    }

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
});


/* ========================================
   INSTAGRAM
======================================== */

const instagramLink = document.getElementById("instagramLink");

if (instagramLink) {
  instagramLink.href = CONFIG.instagram;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener noreferrer";
}


/* ========================================
   MENU PARA CELULAR
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const menuAberto = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", menuAberto);
    menuToggle.setAttribute("aria-expanded", String(menuAberto));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* ========================================
   ANIMAÇÕES AO ROLAR A PÁGINA
======================================== */

const elementosAnimados = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("active");
          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
  });
} else {
  elementosAnimados.forEach((elemento) => {
    elemento.classList.add("active");
  });
}


/* ========================================
   ANO AUTOMÁTICO NO RODAPÉ
======================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
