const APP = {
    alcadas: [
        {nome: "Gerente"}
    ]
}

function add(){
    const inputAlcada = document.getElementById("alcada")
    const alcada = inputAlcada.value

    if (!alcada) {
        alert("informe o nome da alçada")
        return
    }
    
    const novaAlcada= {alcada}

    const alc = JSON.parse(localStorage.getItem("alc"))
    localStorage.setItem("alc",JSON.stringify(alc.concat(novaAlcada)))


    inputAlcada.value = ""
}



function mostrarPermissoes(){
    const perm = JSON.parse(localStorage.getItem("perm"))

    if(!perm) localStorage.setItem("perm",JSON.stringify(APP.permissoes))
    
    const div = document.querySelector("div")

    for (let i = 0; i < perm.length; i++) {
        const permissao = perm[i]

        const input = document.createElement("input")
        input.type = 'checkbox'

        const label = document.createElement("label")
        label.innerText = permissao.nome

        div.appendChild(input)
        div.appendChild(label)
    }
}

mostrarPermissoes()

