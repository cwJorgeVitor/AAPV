

function logar(){

    const cpf = document.querySelector('#user_cpf').value,
          pass = document.querySelector('#password').value;

    if(cpf === '12345678999' && pass === 'admin'){
        console.log('Logou')
        window.location.href = "../paciente_main/index.html";
    }

    console.log('Senha Errada')
}