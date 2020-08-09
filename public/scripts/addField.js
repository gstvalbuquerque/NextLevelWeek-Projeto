// Procurar botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Duplicar campos
function cloneField() {
    document.querySelector(".schedule-item").cloneNode(true)
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

     //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach((field) => field.value = "")
    

    //inserir nesta parte da página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}