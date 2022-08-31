function comprovar() {
    let string = document.getElementById('texto').value;
    let allmayus=true;
    let allminus=true;
    for (let pos = 0; pos < string.length; pos++) {
        if (string[pos] == string[pos].toUpperCase()) {
            allminus=false;
        }else{
            allmayus=false;
        }
    }
    if (allmayus==true) {
        alert('Todos los caracteres de la cadena son mayusculas')
    } else if(allminus==true){
        alert('Todos los caracteres de la cadena son minusculas')
    }else{
        alert('Hay tanto mayusculas como minusculas')
    }
}