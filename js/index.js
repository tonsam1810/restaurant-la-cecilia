function cambiarColorNav(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("color").style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
    setTimeout("cambiarColorNav()",1000);
}
cambiarColorNav();

//alert("hola");
//banner
var i=1;
var ban = new Array("banner0","banner1");//Lista de imagenes jpg
function cambiarBanner(){
        document.getElementById("banner").setAttribute("src",`../imagenes/banners/${ban[i]}.jpg`);
        i++;
        if(i==ban.length)
        i=0;
}
setInterval("cambiarBanner()",2000);

//LISTAR EVENTOS en INDEX
var eventosa = new Array("evento 1","evento 2","evento 3");
function listarEventos(){
    eventosa.forEach(element => {
        let evento = document.createElement("li")
        evento.innerHTML = element
    document.getElementById("eventos").appendChild(evento);   
    });
}
listarEventos();



//opacar boton
function opacarBoton(){
    document.getElementById("imagenboton").style.opacity="0";
    document.getElementById("imagenboton").style.transition="all 1s ease";
    setTimeout("AparecerBoton()" , 1000);
}
opacarBoton();

function AparecerBoton(){
    document.getElementById("imagenboton").style.opacity="1";
    document.getElementById("imagenboton").style.transition="all 1s ease";
    setTimeout("opacarBoton()",1000);
}

//cambiar imagen 
function primera(){
    element = document.getElementById("logo");
    element.src="../imagenes/logo1.jpg";
   
}

function segunda(){
    element = document.getElementById("logo");
    element.src="../imagenes/logo2.jpg";
    document.getElementById("logo").setAttribute("onmouseout" , "primera()");
}

function mostrarChicharrones(){
    document.getElementById('Chicharrones').style.display='block'
    document.getElementById('Piqueos').style.display='none'
    document.getElementById('Almuerzos').style.display='none'
    document.getElementById('Entradas').style.display='none'
    document.getElementById('BebidasSinAlcohol').style.display='none'
    document.getElementById('BebidasAlcoholicas').style.display='none'
}
function mostrarPiqueos(){
    document.getElementById('Chicharrones').style.display='none'
    document.getElementById('Piqueos').style.display='block'
    document.getElementById('Almuerzos').style.display='none'
    document.getElementById('Entradas').style.display='none'
    document.getElementById('BebidasSinAlcohol').style.display='none'
    document.getElementById('BebidasAlcoholicas').style.display='none'
}
function mostrarAlmuerzos(){
    document.getElementById('Chicharrones').style.display='none'
    document.getElementById('Piqueos').style.display='none'
    document.getElementById('Almuerzos').style.display='block'
    document.getElementById('Entradas').style.display='none'
    document.getElementById('BebidasSinAlcohol').style.display='none'
    document.getElementById('BebidasAlcoholicas').style.display='none'
}
function mostrarEntradas(){
    document.getElementById('Chicharrones').style.display='none'
    document.getElementById('Piqueos').style.display='none'
    document.getElementById('Almuerzos').style.display='none'
    document.getElementById('Entradas').style.display='block'
    document.getElementById('BebidasSinAlcohol').style.display='none'
    document.getElementById('BebidasAlcoholicas').style.display='none'
}
function mostrarBebidasSinAlcohol(){
    document.getElementById('Chicharrones').style.display='none'
    document.getElementById('Piqueos').style.display='none'
    document.getElementById('Almuerzos').style.display='none'
    document.getElementById('Entradas').style.display='none'
    document.getElementById('BebidasSinAlcohol').style.display='block'
    document.getElementById('BebidasAlcoholicas').style.display='none'
}
function mostrarBebidasAlcoholicas(){
    document.getElementById('Chicharrones').style.display='none'
    document.getElementById('Piqueos').style.display='none'
    document.getElementById('Almuerzos').style.display='none'
    document.getElementById('Entradas').style.display='none'
    document.getElementById('BebidasSinAlcohol').style.display='none'
    document.getElementById('BebidasAlcoholicas').style.display='block'
}