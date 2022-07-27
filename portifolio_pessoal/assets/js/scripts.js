
let botao_menu = document.querySelector('#menu-btn');
let menu_lateral = document.querySelector('.menu');


botao_menu.onclick = () =>{
    botao_menu.classList.toggle('fa-times');
    menu_lateral.classList.toggle('active');
    
}

window.onscroll = () =>{
    botao_menu.classList.remove('fa-times');
    menu_lateral.classList.remove('active');
}

const body = document.querySelector('body'),
      menu = body.querySelector('section'),
      toggle = body.querySelector(".toggle");

      toggle.addEventListener("click" , () =>{
        menu.classList.toggle("close");
    })
