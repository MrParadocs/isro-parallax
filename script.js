// JavaScript to swap the text after animation completes
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

setTimeout(() => {
  text1.style.display = "none";
  text2.style.opacity = "1";
}, 6000);
