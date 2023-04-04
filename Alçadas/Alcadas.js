const APP = {
    alcadas: [
        {id: "gerente", nome: "Gerente", permissao: "Editar"}
    ]
}

function addAlcada(){
    const inputAlcada = document.getElementById("alcada")
    const nome = inputAlcada.value
    if (!nome) {
        alert("informe o nome da alçada")
        return
    }

    const perm = JSON.parse(localStorage.getItem("perm"))
    if(!perm) localStorage.setItem("perm",JSON.stringify(APP.permissoes))

    const PVerdadeiras= []
    for (let i = 0; i < perm.length; i++) {
        const permissao = perm[i]
        const inputP = document.getElementById(permissao.id)

        const permissao2 = inputP.checked
         
        if(permissao2){
            PVerdadeiras.push(permissao)
        }
    }
    if (PVerdadeiras.length===0){
        alert("escolha as permissões dessa alçada")
        return
    }   
 
    const novaAlcada= {id: nome.toLowerCase(), nome, permissao: PVerdadeiras}

    const alc = JSON.parse(localStorage.getItem("alc"))
    localStorage.setItem("alc", JSON.stringify(alc.concat(novaAlcada)))

    render()

    inputAlcada.value = ""
}

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
        tdP.innerHTML = alcada.permissao
        tr.appendChild(tdP)

        table.appendChild(tr)
    }
}

function mostrarPermissoes(){
    const perm = JSON.parse(localStorage.getItem("perm"))

    if(!perm) localStorage.setItem("perm",JSON.stringify(APP.permissoes))
    
    const div = document.querySelector("div")

    for (let i = 0; i < perm.length; i++) {
        const permissao = perm[i]

        const input = document.createElement("input")
        input.type = 'checkbox'
        input.id = permissao.id

        const label = document.createElement("label")
        label.innerText = permissao.nome

        div.appendChild(input)
        div.appendChild(label)
    }
}

render()

mostrarPermissoes()