function toggleMenu(){
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("active");
  });
});
