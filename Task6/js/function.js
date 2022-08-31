let letras =[
    'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'
]

function calcularDNI() {
    let num = document.getElementById('numeroDNI').value;
    let letra= document.getElementById('letraDNI').value;

    if (num<0 || num>99999999) {
        alert('Numero introducido no valido');
    }else{
        let res = num%23;
        letraF=letras[res];
        if (letraF==letra) {
            alert('El numero y la letra son correctos')
        } else {
            alert('La letra que ha introducido no es correcta')

        }
    }

}