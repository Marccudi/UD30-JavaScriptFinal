let valores = [true, 5, false, "hola", "adios", 2];
let tam = 0;
let val;
let suma = 0;
let resta = 0;
let mult = 0;
let div = 0;
let mod = 0;
let res;
//1
valores.forEach(element => {
    if (typeof element == "string" && tam == 0) {
        tam = element.length;
        val = element;
    } else if (typeof element == "string" && tam != 0) {
        if (element.length > tam) {
            val=element;
        }
    }

});
document.getElementById('num1').innerHTML= 'El string mas largo es: '+val;

//2
let cont = 0;
let resT;
let resF;
valores.forEach(element => {
    if (typeof element == "boolean" && cont == 0) {
        resT=element;
        resF=element;
        cont++
    }else if(typeof element == "boolean" && cont > 0){
        resT = resT && element;
        resF = resF || element;
    }
});
document.getElementById('num2').innerHTML =resT + "<br>" + resF;

//3
cont=0;
valores.forEach(element => {
    if (typeof element == "number" && cont == 0) {
        suma = element;
        resta = element;
        mult = element;
        div = element;
        mod = element;
        cont++;
    } else if (typeof element == "number" && cont != 0) { 
        suma+=element;
        resta-=element;
        mult*=element;
        div/=element;
        mod %=element;
    }
});
document.getElementById('num3').innerHTML="Suma= "+suma+ "<br>Resta= "+resta+"<br>Multiplicacion: "+mult+
"<br>Division: "+div+"<br>Mod: "+mod;

