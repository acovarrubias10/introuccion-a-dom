var btnUno = document.querySelector('#btnUno')
var btnDos = document.querySelector('#btnDos')

btnUno.addEventListener('click', () =>{
    for(let i = 1; i < 10; i++){
        console.log(i)
    }
})

btnDos.addEventListener('click', () =>{
    for(let i = 0; i <= 100; i=i+5){
        console.log(i)
    }
})