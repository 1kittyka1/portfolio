const btnmenu = document.querySelector('.menu')
const btnworks = document.querySelector('.btnworksopen')
const btnworksc = document.querySelector('.btnworksclose')
const burgerwindow = document.querySelector('.buger')
const closebtn = document.querySelector('.closebtn')
const options = document.querySelector('.burger_option')
btnmenu.addEventListener('click', () => {
  burgerwindow.style.display = "flex";
});
closebtn.addEventListener('click', () => {
  burgerwindow.style.display = "none";
});
btnworks.addEventListener('click', () => {
  options.style.display = "block";
  btnworksc.style.display = "block"
  btnworks.style.display = "none"
});
btnworksc.addEventListener('click', () => {
  options.style.display = "none";
  btnworksc.style.display = "none"
  btnworks.style.display = "block"
});