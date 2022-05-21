const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle"),
      form = document.querySelectorAll('.form-label')

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");

    form.forEach((item)=>{
        item.classList.toggle("dark");
    })

}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");

    form.forEach((item)=>{
        item.classList.toggle("dark");
    })
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})






const consultas = document.querySelector('#consultas'),
      meuperfil = document.querySelector('#meuperfil'),
      agendamento = document.querySelector('#agendamento')
      content_consultas = document.querySelector('#content_consultas'),
      content_myprofile = document.querySelector('#my_profile'),
      content_agendamento = document.querySelector('#content_agendamento')
      



      consultas.addEventListener('click', ()=>{
          content_myprofile.style.display = 'none'
          content_consultas.style.display = 'block'
          content_agendamento.style.display = 'none'
      })


      meuperfil.addEventListener('click', ()=>{
        content_myprofile.style.display = 'block'
        content_consultas.style.display = 'none'
        content_agendamento.style.display = 'none'
    })

    agendamento.addEventListener('click', ()=>{
        content_myprofile.style.display = 'none'
        content_consultas.style.display = 'none'
        content_agendamento.style.display = 'block'
    })