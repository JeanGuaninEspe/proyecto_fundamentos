function taxi(){
    let guardar1=document.getElementById("txt1").value;
    let guardar2=document.getElementById("txt2").value;
    let guardar3=document.getElementById("txt3").value;
    
    if(guardar1==""){
    alert("Cuadro de texto 1 vacio - llenar por favor")
    }
    if(guardar2==""){
        alert("Cuadro de texto 2 vacio - llenar por favor")

    }
    if(guardar3==""){

        alert("Cuadro de texto 3 vacio - llenar por favor")

    }else{
        alert(guardar1+ " Ubicacion " +guardar2+ " con destino a "+guardar3+ " -Servicio Contratado-");
        document.getElementById("imagen").src="Imagenes/taxi.jpg";
        document.getElementById("txtTaxi").innerHTML="El taxi contratado es el siguiente :";

    }


}

function abrirpagina(){
    window.open("https://www.google.com/");
}
function puerta(){
    let guardar1=document.getElementById("txt4").value;
    let guardar2=document.getElementById("txt5").value;
    let guardar3=document.getElementById("txt6").value;
    
    if(guardar1==""){
    alert("Cuadro de texto 1 vacio - llenar por favor")
    }
    if(guardar2==""){
        alert("Cuadro de texto 2 vacio - llenar por favor")

    }
    if(guardar3==""){

        alert("Cuadro de texto 3 vacio - llenar por favor")

    }else{
        alert(guardar1+ " Ubicacion " +guardar2+ " con destino a "+guardar3+ " -Servicio Contratado-");
        document.getElementById("imagen2").src="Imagenes/puerta.png";
        document.getElementById("txtPuerta").innerHTML="El vehiculo contratado es el siguiente :";

    }
}
function limpiar(){
    document.getElementById("txt1").value="";
    document.getElementById("txt2").value="";
    document.getElementById("txt3").value="";
    document.getElementById("txtTaxi").innerHTML="";
    document.getElementById("imagen").src="";
}
function limpiar2(){
    document.getElementById("txt4").value="";
    document.getElementById("txt5").value="";
    document.getElementById("txt6").value="";
    document.getElementById("txtPuerta").innerHTML="";
    document.getElementById("imagen2").src="";
}
function reservar(){
    if(document.getElementById("oferta1").checked){
    document.getElementById("texto1").innerHTML="Viaje a Mindo reservado";
    document.getElementById("imagen3").src="Imagenes/mindo.jpg";
    }
    if(document.getElementById("oferta2").checked){
        document.getElementById("texto1").innerHTML="Viaje a Atacames reservado";
        document.getElementById("imagen3").src="Imagenes/atacames.jpeg";

    }
    if(document.getElementById("oferta3").checked){
        document.getElementById("texto1").innerHTML="Viaje a Sur de Quito reservado";
        document.getElementById("imagen3").src="Imagenes/quito.jpg";


    }
    if(document.getElementById("oferta4").checked){
        document.getElementById("texto1").innerHTML="Viaje a Manabi reservado";
        document.getElementById("imagen3").src="Imagenes/manabi.jpg";


    }
}
function cancelar(){
    document.getElementById("texto1").innerHTML="";
    document.getElementById("texto2").innerHTML="";
    document.getElementById("texto3").innerHTML="";
    document.getElementById("texto4").innerHTML="";
    document.getElementById("imagen3").src="";
}