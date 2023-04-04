const users = JSON.parse(localStorage.getItem("users"))

const inputEmail = document.getElementById("email")
const email = inputEmail.innerHTML

const inputSenha = document.getElementById("senha")
const senha = inputSenha.innerHTML

function verificacao(){
    for (let i = 0; i < users.length; i++) {
        const usuario = users[i]
        if(email == usuario.email && senha == usuario.senha){
            window.location.replace('http://127.0.0.1:5500/Usuario/listagemUsuario.html')
        }
    }
}