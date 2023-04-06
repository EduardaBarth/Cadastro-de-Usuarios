
function verificacao(){
    const users = JSON.parse(localStorage.getItem("users"))

    const email = document.getElementById("email").value


    const senha = document.getElementById("senha").value
    

    for (let i = 0; i < users.length; i++) {
        const usuario = users[i]
        if(email === usuario.email && senha === usuario.senha){
            window.location.replace('http://127.0.0.1:5500/Usuario/listagemUsuario.html')
        }
    }
}

function validate(){
    const email = document.getElementById("email").value
    if(!email){
        
    }
}