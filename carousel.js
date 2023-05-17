/*------------START Carousel------------*/

const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

/* "Bouton" du slide gauche */
leftArrow.addEventListener("click", function () {
  reverseSlide();
});
/* "Bouton" du slide droite */
rightArrow.addEventListener("click", function () {
  slide();
});

/* Fonction pour slide sur l'image de droite  */
function slide() {
  const img = document.querySelector(".imageCarousel").getAttribute("src");
  switch (img) {
    case "images/imageCarousel1.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel2.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 2";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
    case "images/imageCarousel2.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel3.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 3";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
    case "images/imageCarousel3.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel1.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 1";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
  }
}

/* Fonction pour slide sur l'image de gauche  */
function reverseSlide() {
  const img = document.querySelector(".imageCarousel").getAttribute("src");
  switch (img) {
    case "images/imageCarousel1.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel3.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 3";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
    case "images/imageCarousel3.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel2.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 2";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
    case "images/imageCarousel2.svg":
      document.querySelector(".imageCarousel").classList.add("fade-in-out");
      document.querySelector(".imageCarousel").src =
        "images/imageCarousel1.svg";
      document.querySelector(".titleCarousel").innerHTML = "IMAGE 1";
      setTimeout(() => {
        document
          .querySelector(".imageCarousel")
          .classList.remove("fade-in-out");
      }, 500);
      break;
  }
}
/*------------END Carousel------------*/
