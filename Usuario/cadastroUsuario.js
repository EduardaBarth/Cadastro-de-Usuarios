const usuarios = []
function add(){
    const inputNome = document.getElementById("nome")
    const nome = inputNome.value
    if (!nome) {
        alert("escreva uma tarefa")
        return
    }
    usuarios.push(nome) 
    inputNome.value = ""
    
    const inputId = document.getElementById("id")
    const id = inputId.value
    if (!id) {
        alert("escreva uma tarefa")
        return
    }
    usuarios.push(id) 
    inputId.value = ""

    const inputEmail = document.getElementById("email")
    const email = inputEmail.value
    if (!email) {
        alert("escreva uma tarefa")
        return
    }
    usuarios.push(email) 
    inputEmail.value = ""

    const inputSenha = document.getElementById("senha")
    const senha = inputSenha.value
    if (!senha) {
        alert("escreva uma tarefa")
        return
    }
    usuarios.push(senha) 
    inputSenha.value = ""

    const inputIdade = document.getElementById("idade")
    const idade = inputIdade.value
    if (!idade) {
        alert("escreva uma tarefa")
        return
    }
    usuarios.push(idade) 
    inputIdade.value = ""

    render()
}
function render(){
    const body = document.querySelector("body")
    usuarios.forEach(function(nome){
        const p = document.createElement("p") //criando um novo li
        p.innerText = nome 

        body.appendChild(p)
    })
    
}
render()