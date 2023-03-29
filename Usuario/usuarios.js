const APP = {
    usuarios: [
        {id: 1, nome: "Joao", idade: 70, email: "@", senha: 123},
        {id: 2, nome: "Maria", idade: 93, email: "@", senha: 123},
    ]
}



function add(){
    const inputId = document.getElementById("id")
    const id = inputId.value
    if (!id) {
        alert("informe seu id")
        return
    }

    const inputNome = document.getElementById("nome")
    const nome = inputNome.value
    if (!nome) {
        alert("informe seu nome")
        return
    }

    const inputIdade = document.getElementById("idade")
    const idade = inputIdade.value
    if (!idade) {
        alert("informe sua idade")
        return
    }

    const inputEmail = document.getElementById("email")
    const email = inputEmail.value
    if (!email) {
        alert("informe seu email")
        return
    }
     
    const inputSenha = document.getElementById("senha")
    const senha = inputSenha.value
    if (!senha) {
        alert("informe sua senha")
        return
    }

    const novoUsuario = {id, nome, idade, email, senha}
    // console.log(novoUsuario)
    // APP.usuarios.push(novoUsuario)

    
    const users = JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users",JSON.stringify(users.concat(novoUsuario)))
    
    render()

    



    inputIdade.value = ""
    inputId.value = ""
    inputNome.value = ""
    inputEmail.value = ""
    inputSenha.value = ""

    //location.reload()
}



function render() {
    const users = JSON.parse(localStorage.getItem("users"))

    if(!users) localStorage.setItem("users",JSON.stringify(APP.usuarios))
    const table = document.querySelector("table tbody")
    
    table.replaceChildren()
    for (let i = 0; i < users.length; i++) {
        
        //const usuario = localStorage.getItem(APP.usuarios[i])
        const usuario = users[i]

        const tr = document.createElement("tr")

        const tdId = document.createElement("td")
        tdId.innerText = usuario.id
        tr.appendChild(tdId)

        const tdNome = document.createElement("td")
        tdNome.innerText = usuario.nome
        tr.appendChild(tdNome)

        const tdIdade = document.createElement("td")
        tdIdade.innerText = usuario.idade
        tr.appendChild(tdIdade)

        const tdEmail = document.createElement("td")
        tdEmail.innerText = usuario.email
        tr.appendChild(tdEmail)

        const tdSenha = document.createElement("td")
        tdSenha.innerText = usuario.senha
        tr.appendChild(tdSenha)

        table.appendChild(tr)
    }
}

function verificacao(){
    
}

render()