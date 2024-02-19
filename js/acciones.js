document.addEventListener("DOMContentLoaded", () => {

    //obtengo los datos de los inputs
    obtenerCampos();

});

let campo1;
let campo2;

let nombre;
let pass;

function obtenerCampos() {
    campo1 = document.querySelector('#nombre');
    campo2 = document.querySelector('#pass');

   console.log(campo1);
   console.log(campo2);
}

function obtenerDatos() {

    if (campo1.value != "" && campo2.value != "") {
        //debugger;
        sessionStorage.setItem('nombreUsuario', campo1.value);
        sessionStorage.setItem('passUsuario', campo2.value);

        console.log('nombreUsuario');
        console.log('passUsuario');
        //debugger;

        //avanzo a otra pagina
        //window.open("multimedia.html","_self");
        //document.location.href = "multimedia.html";
        //window.location.assign("multimedia.html");
        alert('Datos guardados exitosamente');
        window.location.href = "multimedia.html";
    } else {
        alert('Ingresa los datos en los campos');
    }

}

function cierraSesion(){
    sessionStorage.clear();

    //regreso al index.html
    //window.open("index.html","_self");
    //document.location.href = "index.html";
    //window.location.assign("index.html");
    window.location.href = "index.html";
}
