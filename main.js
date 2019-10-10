var btnSelect = document.querySelector('#btnSelect')
var btnOpcion = document.querySelector('#btnOpcion')
var btnLista = document.querySelector('#btnLista')
var btnTabla = document.querySelector('#btnTabla')

btnTabla.addEventListener('click', () =>{
    let nombre = document.querySelector('#nombre').value
    let tabla = document.querySelector('#tabla')
    let nuevoRenglon = tabla.insertRow(-1)
    let col1 = nuevoRenglon.insertCell(0)

    col1.textContent = nombre
})

btnLista.addEventListener('click', () =>{
    let nombre = document.querySelector('#nombre').value
    let lista = document.querySelector('#lista')
    let nuevoItem = document.createElement('li')

    nuevoItem.textContent = nombre
    lista.appendChild(nuevoItem)
})

btnOpcion.addEventListener('click', () =>{
    let nombre = document.querySelector('#nombre').value 
    let seccion = document.querySelector('#seccion')
    let nuevaSeccion = document.createElement('option')

    nuevaSeccion.value = nombre
    nuevaSeccion.text = nombre
    
    seccion.add(nuevaSeccion)
})

btnSelect.addEventListener('click', () =>{
    let seccion = document.querySelector('#seccion').value
    let resultado = document.querySelector('#resultado')

    resultado.value = seccion 
})