function comprovar() {
    let string = document.getElementById('texto').value;
    let reves="";
    for (let index = string.length-1; index >= 0; index--) {
        reves+=string[index];
    }
    string=string.toUpperCase();
    reves=reves.toUpperCase();
    if (string == reves) {
        alert('la cadena es palidromo');
    } else {
        alert('la cadena no es palidromo');
    }
}