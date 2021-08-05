/**
 * On click me button, first heading turns red into 1 second
 * second heading turns yellow into 2 second
 * third heading turns green into 3 second
 */

const button = document.querySelector(".btn");

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");

button.addEventListener("click", () => {
  setTimeout(() => {
    firstHeading.style.color = "red";
    setTimeout(() => {
      secondHeading.style.color = "yellow";
      setTimeout(() => {
        thirdHeading.style.color = "green";
      }, 3000);
    }, 2000);
  }, 1000);
});
