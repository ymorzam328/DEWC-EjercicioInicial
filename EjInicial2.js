
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let nombre=prompt("Dime tu nombre");
    document.getElementById('h').innerText="Hola " + nombre;
    setTimeout(()=>{
        // document.getElementById('h').innerHTML+="<h2>otra cosas</h2>";
        document.getElementById('h').innerHTML+="<h2>"+ location.href+ "</h2>";
    }, 3000)
    //esto sirve para escribir algo después de unos segundos 3000 minisegundos que son 3 segundos
    

    setTimeout(() => {
        location.href="http://www.google.es";
    }, 6000);

});
