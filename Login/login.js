function logar(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let users = JSON.parse(localStorage.getItem("users"))
    if(!users) localStorage.setItem("users",JSON.stringify(APP.usuarios))

    if(users.some((v)=>{return v.email==email && v.senha==senha})){
        let user2 = users.filter((v)=>{return v.email==email && v.senha==senha})[0]

        window.location.href = "/Usuario/listagemUsuario.html"
    }else{
        alert("Email ou senha não identificados");
    } 
}