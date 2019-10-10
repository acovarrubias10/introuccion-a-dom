var btnSelect = document.querySelector('#btnSelect')
var btnOpcion = document.querySelector('#btnOpcion')

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