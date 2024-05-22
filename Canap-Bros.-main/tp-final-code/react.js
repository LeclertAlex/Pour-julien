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

  // Calculer la translation
  const newTransform = -slideIndex * (100 / itemsVisible);

  // Appliquer la translation
  document.getElementById('carouselInner').style.transform = `translateX(${newTransform}%)`;
}

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});

document.querySelector('.previous').addEventListener('click', function() {
  plusSlides(-1);
});