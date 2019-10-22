var btnUno = document.querySelector('#btnUno')
var btnDos = document.querySelector('#btnDos')
var btnTres = document.querySelector('#btnTres')

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

btnTres.addEventListener('click', () => {
    
    let x = Number(document.querySelector('#numero1').value)
    let y = Number(document.querySelector('#numero2').value)
    for (let i = x; i <= y; i++) {
        console.log(i)
    }
        
    })