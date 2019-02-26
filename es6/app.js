const listaComentarios = document.querySelector(".lista-comentarios")
eventListeners()

function eventListeners() {
    document.querySelector(".formulario").addEventListener("submit", agrComentario)
    listaComentarios.addEventListener("click", borComentario)
    document.addEventListener("DOMContentLoaded", localStorageCargado)
}

function agrComentario(e) {
    e.preventDefault()
    const comentario = document.querySelector(".comentario").value
    const bBorrar = document.createElement("a")
    bBorrar.classList = "borrar"
    bBorrar.innerText = "X"
    const li = document.createElement("li")
    li.innerText = comentario
    li.appendChild(bBorrar)
    listaComentarios.appendChild(li)
    agreComenLocalStorage(comentario)
}

function borComentario(e) {
    e.preventDefault()
    if (e.target.className === "borrar") {
        e.target.parentElement.remove()
        borrarComentarioLocalStorage(e.target.parentElement.innerText)
        console.log("se borro el comentario")
    }
}

function localStorageCargado() {
    let agrComentario
    agrComentario = obteComenLocalStorage()
    agrComentario.forEach(function (comentario) {
        const bBorrar = document.createElement("a")
        bBorrar.classList = "borrar"
        bBorrar.innerText = "X"
        const li = document.createElement("li")
        li.innerText = comentario
        li.appendChild(bBorrar)
        listaComentarios.appendChild(li)
    });

}

function agreComenLocalStorage(comentario) {
    let comenAgregados
    comenAgregados = obteComenLocalStorage()
    comenAgregados.push(comentario)
    localStorage.setItem("comenAgregados", JSON.stringify(comenAgregados))
}

function obteComenLocalStorage() {
    let comenAgregados
    if (localStorage.getItem("comenAgregados") === null) {
        comenAgregados = []
    } else {
        comenAgregados = JSON.parse(localStorage.getItem("comenAgregados"))
    }
    return comenAgregados
}

function borrarComentarioLocalStorage(comentario) {
    let comenAgregados, comBorrar
    comBorrar = comentario.substring(0, comentario.length - 1)

    comenAgregados = obteComenLocalStorage()
    comenAgregados.forEach(function (comentario, index) {
        if (comBorrar === comentario) {
            comenAgregados.splice(index, 1)
        }
    })
    localStorage.setItem("comenAgregados", JSON.stringify(comenAgregados))
}