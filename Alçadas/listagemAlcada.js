function render(){
    const alc = JSON.parse(localStorage.getItem("alc"))
    if(!alc) localStorage.setItem("alc", JSON.stringify(APP.alcadas))

    const table = document.querySelector("table tbody")
    table.replaceChildren()

    for (let i = 0; i < alc.length; i++) {
        const alcada = alc[i]

        const tr = document.createElement("tr")

        const tdNome = document.createElement("td")
        tdNome.innerText = alcada.nome
        tr.appendChild(tdNome)

        const tdP = document.createElement("td")
        let permissoes_string = ""

        alcada.permissao.forEach(p => {
          permissoes_string += p.nome + " "  
        })

        tdP.innerHTML = permissoes_string
        tr.appendChild(tdP)

        table.appendChild(tr)
    }
}

function permissao(){
    const perm = JSON.parse(localStorage.getItem("perm"))
    
    if(!perm) localStorage.setItem("perm", JSON.stringify(APP.permissoes))

    const table = document.getElementById("tbodyPermissao")
    table.replaceChildren()

    for (let i = 0; i < perm.length; i++) {
        const permissao = perm[i]

        const tr = document.createElement("tr")

        const td = document.createElement("td")
        td.innerText = permissao.nome
        tr.appendChild(td)

        table.appendChild(tr)
    }
}

render()

permissao()