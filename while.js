var btnUno = document.querySelector('#btnUno')
var btnDos = document.querySelector('#btnDos')
var btnTres = document.querySelector('#btnTres')

btnUno.addEventListener('click', () =>{
    let i = 0
    while (i<10){
        console.log(i)
        i++
    }
})

btnDos.addEventListener('click', () =>{

    let miSelect = document.querySelector('#miSelect')
    let i = 0

    while(i < 10){
        //Crea el nuevo elemento HTML tipo Option
        let nvaOpcion = document.createElement('option')
        
        //Asiga el valor y texto de ese nuevo elemento
        nvaOpcion.value = i
        nvaOpcion.text = i

        //Agrega el nuevo elemento al select
        miSelect.add(nvaOpcion)

        // Incrementala variable de control del ciclo
        i++
    }
})

btnTres.addEventListener('click', () =>{
    let numero1 = document.querySelector('#numero1')
})