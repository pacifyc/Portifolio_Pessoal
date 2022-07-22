const body = document.querySelector('body'),
      menu = body.querySelector('section'),
      toggle = body.querySelector(".toggle");

      toggle.addEventListener("click" , () =>{
        menu.classList.toggle("close");
    })
