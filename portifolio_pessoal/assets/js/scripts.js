
const body = document.querySelector('body'),
menu = body.querySelector('section'),
togglex = body.querySelector(".bx-chevron-right");
toggley = body.querySelector(".bx-chevron-left");

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



      togglex.addEventListener("click" , () =>{
          menu.classList.toggle("close");
        });

        toggley.addEventListener("click" , () =>{
            menu.classList.toggle("close");
          });
