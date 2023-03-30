const APP = {
    permissoes: [
        {nome: "Editar"},
        {nome: "Deletar"},
    ]
}

function add(){
    const inputPermissao = document.getElementById("permissao")
    const nome = inputPermissao.value
    if (!nome) {
        alert("informe o nome da permissão")
        return
    }

    const novaPermissao= {nome}
    //APP.permissoes.push(novaPermissao)

    const perm = JSON.parse(localStorage.getItem("perm"))
    localStorage.setItem("perm",JSON.stringify(perm.concat(novaPermissao)))

    render()

    inputPermissao.value = ""
}

function render(){
    const perm = JSON.parse(localStorage.getItem("perm"))
    if(!perm) localStorage.setItem("perm",JSON.stringify(APP.permissoes))

    const table = document.querySelector("table tbody")
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