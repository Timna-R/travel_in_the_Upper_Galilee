const en_btn = document.getElementById("en_btn");
const he_btn = document.getElementById("he_btn");
const english = document.querySelectorAll(".english");
const hebrew = document.querySelectorAll(".hebrew");

// Change language to english
en_btn.addEventListener("click", function onClick() {
  english.forEach((elem) => (elem.style.display = "block"));
  hebrew.forEach((elem) => (elem.style.display = "none"));

// Change button style
  he_btn.classList.remove("btn_active");
  en_btn.classList.add("btn_active");
});

// Change language to hebrew
he_btn.addEventListener("click", function onClick() {
  english.forEach((elem) => (elem.style.display = "none"));
  hebrew.forEach((elem) => (elem.style.display = "block"));
  
  // Change button style
  he_btn.classList.add("btn_active");
  en_btn.classList.remove("btn_active");
});
