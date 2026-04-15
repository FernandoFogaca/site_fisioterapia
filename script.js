
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", ()=>{nav.classList.toggle("active");
                                    menu.classList.toggle("active")});