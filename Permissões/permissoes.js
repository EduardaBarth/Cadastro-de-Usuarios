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
    APP.permissoes.push(novaPermissao)
    render()

    inputPermissao.value = ""
}

function render(){
    const table = document.querySelector("table tbody")
    
    table.replaceChildren()

    for (let i = 0; i < APP.permissoes.length; i++) {
        const permissao = APP.permissoes[i]

        const tr = document.createElement("tr")

        const td = document.createElement("td")
        td.innerText = permissao.nome
        tr.appendChild(td)

        table.appendChild(tr)
    }
}
render()