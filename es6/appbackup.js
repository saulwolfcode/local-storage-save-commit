//VARIABLES
const listaComentarios = document.querySelector(".lista-comentarios")
//EVENTOS DE FUNCIONES
eventListeners()

function eventListeners() {
    //CUANDO SE ENVIA EL FORMULARIO
    document.querySelector(".formulario").addEventListener("submit", agrComentario)
    //BORRAR COMENTARIO
    listaComentarios.addEventListener("click", borComentario)
}
//0 FUNCION AGREGAR COMENTARIO
function agrComentario(e) {
    e.preventDefault()
    const comentario = document.querySelector(".comentario").value
    const bBorrar = document.createElement("a")
    bBorrar.classList = "borrar"
    bBorrar.innerText = "X"
    //1 CREAMOS UN ELEMENTO Y LO AGREGAMOS A LA LISTA
    const li = document.createElement("li")
    li.innerText = comentario
    li.appendChild(bBorrar)
    listaComentarios.appendChild(li)
    console.log(comentario)
    //AGREGAMOS AL LOCAL STORAGE
    agreComenLocalStorage(comentario)
}
//2 BORRAR COMENTARIO CUANDO LE DAS CLICK EN LA X
function borComentario(e) {
    e.preventDefault()
    if (e.target.className === "borrar") {
        console.log("diste click")
        console.log(e.target.parentElement.remove())
        alert("comentario eliminado")
    } else {
        console.log("diste click por fuera")
    }

}
//3 AGREGA EL COMENTARIO AL LOCAL STORAGE --
function agreComenLocalStorage(comentario) {
    let comenAgregados
    // 5 OBTENGO LOS COMENTARIOS DEL LOCAL STORAGE SEA VACIO O LLENO
    comenAgregados = obteComenLocalStorage()
    comenAgregados.push(comentario)
    //6 REESCRIBRIMOS EL JSON
    localStorage.setItem("comenAgregados", JSON.stringify(comenAgregados))
    //esto nos servia hasta el paso antes de los json
    //localStorage.setItem("comenAgregados", comentario)
    //console.log("se agrego el comentario al localStorage paso 4 esta bien")
}
//4 OBTENER COMENTARIOS DEL LOCALSTORAGE LO PASAMOS A UN ARREGLO
function obteComenLocalStorage() {
    let comenAgregados
    if (localStorage.getItem("comenAgregados") === null) {
        comenAgregados = []
    } else {
        comenAgregados = JSON.parse(localStorage.getItem("comenAgregados"))
    }
    return comenAgregados
}