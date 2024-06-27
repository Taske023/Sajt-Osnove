const triger = document.querySelector(".zatamnjena-slika");
let trenutniBrojac = 0;

if (triger) {
  triger.addEventListener("click", function () {
    const slajdovi = document.querySelectorAll(".slajd");
    slajdovi[trenutniBrojac].classList.remove("aktivan");
    trenutniBrojac = (trenutniBrojac + 1) % slajdovi.length;
    slajdovi[trenutniBrojac].classList.add("aktivan");
  });
}

window.addEventListener("scroll", function () {
  const navigacija = document.querySelector(".navigacija");

  if (window.scrollY > 200) {
    navigacija.classList.add("scroll");
  } else {
    navigacija.classList.remove("scroll");
  }
});

let hamburgerMenu = document.querySelector(".hamburger-menu-ikonica");
let navigacioniMeni = document.querySelector(".navigacioni-meni");

hamburgerMenu.addEventListener("click", function () {
  navigacioniMeni.classList.add("prikazi");

  if (hamburgerMenu.classList.contains("otvoren")) {
    navigacioniMeni.classList.remove("prikazi");
    document.body.style.overflow = "auto";
    hamburgerMenu.classList.remove("otvoren");
  } else {
    navigacioniMeni.classList.add("prikazi");
    document.body.style.overflow = "hidden";
    hamburgerMenu.classList.add("otvoren");
  }
});

let slika1 = document.querySelector(".slika1");
let slika2 = document.querySelector(".slika2");
let slika3 = document.querySelector(".slika3");
let slika4 = document.querySelector(".slika4");
let slika5 = document.querySelector(".slika5");
let slika6 = document.querySelector(".slika6");
let slika7 = document.querySelector(".slika7");
let slika8 = document.querySelector(".slika8");
let slika9 = document.querySelector(".slika9");
let xDugme = document.querySelector(".gasenje-dugme");
let modalniPorozor = document.querySelector(".modalni-prozor");
let slika = document.querySelector(".slika-za-menanje");

if (xDugme) {
  xDugme.addEventListener("click", function () {
    modalniPorozor.style.display = "none";
    document.body.style.overflow = "auto";
  });
}
if (slika1) {
  slika1.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika1.jpg";
  });
}

if (slika2) {
  slika2.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika9.jpg";
  });
}

if (slika3) {
  slika3.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika3.jpg";
  });
}

if (slika4) {
  slika4.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika4.jpg";
  });
}

if (slika5) {
  slika5.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika5.jpg";
  });
}

if (slika6) {
  slika6.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika6.jpg";
  });
}

if (slika7) {
  slika7.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika7.jpg";
  });
}

if (slika8) {
  slika8.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika8.jpg";
  });
}

if (slika9) {
  slika9.addEventListener("click", function () {
    modalniPorozor.style.display = "flex";
    document.body.style.overflow = "hidden";
    slika.src = "assets/slika2.jpg";
  });
}

//kontakt stranica
const forma = document.getElementById("forma");
if (forma) {
  forma.addEventListener("submit", function (e) {
    let ime = document.getElementById("ime").value.trim();
    let prezime = document.getElementById("prezime").value.trim();
    let brojTelefona = document.getElementById("brojTelefona").value.trim();
    const rasa1 = document.getElementById("staford").checked;
    const rasa2 = document.getElementById("bigl").checked;
    const rasa3 = document.getElementById("pudla").checked;
    const rasa4 = document.getElementById("haski").checked;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    e.preventDefault();

    if (!ime || !prezime || !brojTelefona) {
      alert("Molimo popunite sva polja.");
      return false;
    } else if (!rasa1 && !rasa2 && !rasa3 && !rasa4) {
      alert("Molimo odaberite bar jednu rasu.");
      return false;
    }

    alert(`${ime} ${prezime}, poruka je uspesno poslata!`);

    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("brojTelefona").value = "";
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
}
