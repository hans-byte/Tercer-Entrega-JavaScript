class nuevaConsulta {
    nombre;
    apellido;
    especialidad;
    fecha;
    hora;
    detalle;
    constructor(nombre,apellido,especialidad,fecha,hora,detalle){
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.fecha = fecha;
        this.hora = hora;
        this.detalle = detalle;
    }
}

let list = []

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const especialidad = document.getElementById("especialidad")
const fecha = document.getElementById("fecha")
const hora = document.getElementById("hora")
const detalle = document.getElementById("detalle")
const check = document.getElementById("check")

const turno = document.getElementById("turno")

const formulario = document.querySelectorAll("form")


window.addEventListener('DOMContentLoaded',turnosagendados())


turno.addEventListener("click",(evento) =>{
    evento.preventDefault();
    if ((nombre.value && apellido.value && especialidad.value && fecha.value && hora.value) === "") {
        alert("Por favor ingrese todos los campos")
    }
    else{
        list.push(new nuevaConsulta(nombre.value,apellido.value,especialidad.value,fecha.value,hora.value,detalle.value))
        localStorage.setItem("turnos",JSON.stringify(list))
        alert("Turno cargado correctamente")
        limpiarFormulario()
        actualizacionTabla(list)
    }
})

function limpiarFormulario(){
    formulario.forEach((campo) => {
        campo.reset()
    })
}

function actualizacionTabla(list){
    const tabla = document.getElementById("tabla")
    let counter = 1;
    tabla.innerHTML = '';
    if (list != null) {
    list.forEach((elemento) => {
        tabla.innerHTML +=
        `
        <tr>
            <th scope="row">${counter}</th>
            <td>${elemento.especialidad}</td>
            <td>${elemento.fecha}</td>
            <td>${elemento.hora}</td>
        </tr>
        
        `
        counter ++
    
    })
    }

}

function turnosagendados(){
    list = JSON.parse(localStorage.getItem("turnos")) || []
    actualizacionTabla(list)
}