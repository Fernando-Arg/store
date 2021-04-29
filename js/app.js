
const contenedorCarrito =document.querySelector('.descripcion');
const vaciarCarrio = document.querySelector('.borrarCarrito');
const listaCursos = document.querySelector('.contenedor__card');
let articulosCarrito=[];

cargarEventlistener();

function cargarEventlistener (){
listaCursos.addEventListener('click', agregarCurso);
}



//funciones

function agregarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('boton')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso (cursoSeleccionado);
    }
}


//leer html y extraer info

function leerDatosCurso (curso){
//console.log(curso);

//crear un objeto con el contenido del curso actual
const infoCurso = {
imagen: curso.querySelector('.card__img').src,
titulo: curso.querySelector('.card__titulo').textContent,
precio: curso.querySelector('.card__precio-oferta').textContent,
id: curso.querySelector('a').getAttribute('data-id'),
cantidad: 1

}
//agrega elementos
articulosCarrito=[...articulosCarrito, infoCurso];
console.log(articulosCarrito)
carritoHtml();
}
//limpiar html

//limpiarHtml();

//recorre el carrito y genera el html
function carritoHtml (){
    articulosCarrito.forEach(curso  =>{
        const div = document.createElement('div')
                div.innerHTML = `
            <div class="descripcion__imagen">
                <img src="${curso.imagen}" width=150px> 
            </div>
            <div class="descripcion__nombre">
                <p class="descripcion__nombre">${curso.titulo}</p>
            </div>
            <div class="descripcion__precio">
                <p class="descripcion__precio">${curso.precio}</p>
            </div>
            <div class="descripcion__cantidad">
                <p class="descripcion__cantidad">1</p>
            </div>            
        <hr/>
        `
        contenedorCarrito.appendChild(div) 
    })
}


//eliminar los cursos del contenedor
function limpiarHtml(){
   // contenedorCarrito.innerHTML='';
    while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
}

}
