function empezar() {
    calcular(document.getElementById('numero').value)
}

function calcular(numero){
    if (numero%2==0) {
        alert('El numero pasado por parametro es par')
    } else {
        alert('el numero pasado por parametro es inpar')
    }
}