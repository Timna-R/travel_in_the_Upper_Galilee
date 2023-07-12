const en_btn = document.getElementById('en_btn');
const he_btn = document.getElementById('he_btn');
const english = document.querySelectorAll('.english');
const hebrew = document.querySelectorAll('.hebrew');

en_btn.addEventListener('click', function onClick() {

    english.forEach(elem => elem.style.display = 'block');
    hebrew.forEach(elem => elem.style.display = 'none');

    // place.classList.remove("place_hebrew");
    // he_btn.classList.add("btn_active");
});
he_btn.addEventListener('click', function onClick() {
    english.forEach(elem => elem.style.display = 'none');
    hebrew.forEach(elem => elem.style.display = 'block');
    // place.classList.add("place_hebrew");
    // he_btn.classList.remove("btn_active");
});