function render(){
    const users = JSON.parse(localStorage.getItem("users"))
    if(!users) localStorage.setItem("users",JSON.stringify(APP.usuarios))

    const alc = JSON.parse(localStorage.getItem("alc"))
    if(!alc) localStorage.setItem("alc", JSON.stringify(APP.alcadas))

    const table = document.querySelector("table tbody")
    table.replaceChildren()

    for (let i = 0; i < users.length; i++) {
        const usuario = users[i]

        const tr = document.createElement("tr")

        const tdNome = document.createElement("td")
        tdNome.innerText = usuario.nome
        tr.appendChild(tdNome)

        for (let i = 0; i < alc.length; i++) {
            const alcada = alc[i]
        
            let permissoes_string = ""
            const nome = alcada.nome
        
            alcada.permissao.forEach(p => {
              permissoes_string += p.nome + " "  
            })
        
            if (usuario.alcada === alcada.nome){
                const tdPermissao = document.createElement("td")
                tdPermissao.innerText = permissoes_string
                tr.appendChild(tdPermissao)
            }
        }

        table.appendChild(tr)
    }
    
}
render()
