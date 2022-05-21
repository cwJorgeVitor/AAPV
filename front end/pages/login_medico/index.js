const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      secretary = document.getElementById("secretary"),
      medic = document.getElementById("medic"),
      close = document.querySelector("#close"),
      modal = document.querySelector('.modal_container'),
      change = document.querySelector('#change');

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    secretary.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    medic.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });



    close.addEventListener('click', () =>{
        modal.style.display = 'none'
    })

    esqueceu_senha.addEventListener('click', () =>{
        modal.style.display = 'flex'
    })


    function abrirModal(params){
        change.innerHTML = params
        modal.style.display = 'flex'
    }