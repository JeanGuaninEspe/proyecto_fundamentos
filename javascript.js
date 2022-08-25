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

    }

}

function abrirpagina(){
    window.open("https://www.google.com/");
}