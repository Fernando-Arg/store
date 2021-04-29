const d = document;
const carrito = d.querySelector(".nav__icono")
console.log(carrito)
const descripcion = d.querySelector(".descripcion")
console.log(descripcion)
carrito.addEventListener("click", () =>{
    descripcion.classList.toggle("active")
})