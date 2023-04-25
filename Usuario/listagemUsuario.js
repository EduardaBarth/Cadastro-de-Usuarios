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

        const botao = document.createElement("button")
        botao.innerText = "Excluir"

        botao.addEventListener("click", function(){
            const filtered = users.filter(usuario2 => usuario2.id !== usuario.id)
            localStorage.setItem('users', JSON.stringify(filtered))
            render()
        })

        // const editar = document.createElement("button")
        // editar.innerText = "Editar"

        // editar.addEventListener("click", function(){
        //     window.location.href ="editarUsuario.html?id="+usuario.id
            
        //     if(pagina === 'cadastroUsuario2'){
        //         const filtered = users.filter(usuario2 => usuario2.id !== usuario.id)
        //         document.getElementById('id').value = usuario.id
        //         document.getElementById('nome').value = usuario.nome
        //         document.getElementById('email').value = usuario.email
        //         document.getElementById('senha').value = usuario.senha
        //         document.getElementById('idade').value = usuario.idade
        //         document.getElementById('alcada').value = usuario.alcada
        //     }
            
        // })
        tr.appendChild(botao)
        // tr.appendChild(editar)

        table.appendChild(tr)
    }
}
render()