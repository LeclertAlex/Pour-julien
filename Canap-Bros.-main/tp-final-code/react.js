function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Ajouter la classe "active" à l'élément de la barre de navigation correspondant à la page actuelle
var currentLocation = window.location.href;
var navLinks = document.querySelectorAll('.topnav a');
navLinks.forEach(function (link) {
  if (link.href === currentLocation) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});



// interaction carousel //

let slideIndex = 0;

function plusSlides(n) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  const itemsVisible = 4;
  
  // Calculer la nouvelle position du slideIndex
  slideIndex += n;

  // Vérifier les limites
  if (slideIndex < 0) {
    slideIndex = totalItems - itemsVisible;
  }
  if (slideIndex > totalItems - itemsVisible) {
    slideIndex = 0;
  }
  // translation entre les image //
  const transformValues = ['0%', '-105%', '-210%', '0%'];
  // Calculer la translation
  const newTransform = transformValues[slideIndex % transformValues.length];

  


  // Appliquer la translation
  document.getElementById('carouselInner').style.transform = `translateX(${newTransform})`;
}

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

document.querySelector('.previous').addEventListener('click', function() {
  plusSlides(-1);
});




let slideIndexSUPNES = 0;

function plusSlidesSUPNES(n) {
    const itemsSUPNES = document.querySelectorAll('.carousel-item-SUPNES');
    const totalItemsSUPNES = itemsSUPNES.length;

    // Calculer la nouvelle position du slideIndex
    slideIndexSUPNES += n;

    // Vérifier les limites
    if (slideIndexSUPNES < 0) {
        slideIndexSUPNES = totalItemsSUPNES - 4;
    }
    if (slideIndexSUPNES >= totalItemsSUPNES) {
        slideIndexSUPNES = 0;
    }

    // Définit les différentes valeurs de translation
    const transformValuesSUPNES = ['0%', '-105%', '-210%', '0%'];
    const newTransformSUPNES = transformValuesSUPNES[slideIndexSUPNES % transformValuesSUPNES.length];

    // Appliquer la translation
    document.getElementById('carouselInner-SUPNES').style.transform = `translateX(${newTransformSUPNES})`;
}

document.querySelector('.next-SUPNES').addEventListener('click', function() {
    plusSlidesSUPNES(1);
});

document.querySelector('.previous-SUPNES').addEventListener('click', function() {
    plusSlidesSUPNES(-1);
});