var btnUno = document.querySelector('#btnUno')

btnUno.addEventListener('click', () => {
    let i = 0
    
    do {
        console.log(i)
        
        i++
    }while (i<10)
})

var btnDos = document.querySelector('#btnDos')

btnDos.addEventListener('click', () =>{
    let x = Number(document.querySelector('#numero1').value)
    let miSelect = document.querySelector('#miSelect')
    
    let i = 0

    do{
        let num = prompt('Escribe un número:')
        let nuevo = document.createElement('option')

        nuevo.value = num
        nuevo.text = num

        miSelect.add(nuevo)
        i++

    } while (i < x)
})