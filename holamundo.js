// 'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // alert("hola mundo");
    if (true) {var a= 70;}
    //Si ponemos let sólo es válida para el bloque donde se encuentra, si salimos desaparece
    //si ponemos var es una variable más global, la podemos usar también fuera del bloque

    console.log(a, typeof(a));
    for(let i=0; i<=10; i++) {
        console.log(i)
    }

    let edad=parseInt(prompt("edad?"));
    //parse la edad y lo pone en número

    console.log(edad,typeof(edad)); 
    //Todo lo que se lea de formulario y de prompt se recoge como String 
    //(en este caso no te lo coge como number)



    // let edad=a>18;
    // console.log(edad, typeof(edad));
    condition=7;

    if (edad>=18){

        document.body.innerHTML="<h1>Es mayor de edad</h1>";
        //Estamos añadiendo texto al body

    } else {
        document.body.innerHTML="<h6>Es menor</h6>";
    }


});
