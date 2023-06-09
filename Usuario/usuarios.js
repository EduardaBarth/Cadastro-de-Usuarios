const APP = {
    usuarios: [
        {id: 1, nome: "Joao", idade: 70, email: "@", senha: 123, alcada: "Diretor"},
        {id: 2, nome: "Maria", idade: 93, email: "@1", senha: 1234, alcada: "Administrador"},
    ]
}

function addUsuario(){
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
    const select = document.getElementById("select")
    const alcada = select.options[select.selectedIndex].value
    
    const users = JSON.parse(localStorage.getItem("users"))

    const id = users.length + 1

    const novoUsuario = {id, nome, idade, email, senha, alcada}

    localStorage.setItem("users",JSON.stringify(users.concat(novoUsuario)))

    render()

    inputIdade.value = ""
    inputNome.value = ""
    inputEmail.value = ""
    inputSenha.value = ""
}

function render() {
    const users = JSON.parse(localStorage.getItem("users"))
    if(!users) localStorage.setItem("users",JSON.stringify(APP.usuarios))

    const table = document.querySelector("table tbody")
    table.replaceChildren()
    
    for (let i = 0; i < users.length; i++) {
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

        const tdAlcada = document.createElement("td")
        tdAlcada.innerText = usuario.alcada
        tr.appendChild(tdAlcada)

        
        table.appendChild(tr)
    }
    

}

function mostrarAlcada(){
    const alc = JSON.parse(localStorage.getItem("alc"))
    if(!alc) localStorage.setItem("alc",JSON.stringify(APP.alcadas))

    const select = document.querySelector("select")

    for (let i = 0; i < alc.length; i++) {
        const alcada = alc[i]

        const option = document.createElement("option")
        option.id = alcada.id
        option.innerHTML = alcada.nome

        select.appendChild(option)
    }
}

render()

mostrarAlcada()