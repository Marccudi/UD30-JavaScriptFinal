function calcular(){
    num=document.getElementById('numero').value;
    let res=num;
    for (let index = num-1; index > 0; index--) {
        res *= index;
    }
    document.getElementById('resultado').innerHTML =document.getElementById('numero').value +"! = " +res;
}