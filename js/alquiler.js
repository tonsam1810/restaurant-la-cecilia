

//añadimos la seccion 1//
var primercaja = document.createElement('header');
primercaja.id= 'dispo';
primercaja.className= 'caja';
document.getElementById("principal").appendChild(primercaja);

//agregando titulo
var tituu = document.createElement('h1');
tituu.innerText='Reserva tu local';
primercaja.appendChild(tituu);

// creando 1 figure //
 var fugu = document.createElement ('figure');
 fugu.id='principio';
 fugu.className= 'caves';
 document.getElementById("dispo").appendChild(fugu);

//ingresamos y creamos los elementos de tipo salas//
var seleccion = document.createElement ('form');
document.getElementById("principio").appendChild(seleccion);
var lab= document.createElement('label');
lab.className='letra';
lab.innerHTML='Salas';
seleccion.appendChild(lab);
var seleccionar=document.createElement('select');
seleccionar.id = 'tipolocal';
seleccion.appendChild(seleccionar);

var opt1=document.createElement('option');
opt1.value = '0';
opt1.innerHTML='sala privada';
seleccionar.appendChild(opt1);


var opt2=document.createElement('option');
opt2.value='1';
opt2.innerHTML='sala Faniliar';
seleccionar.appendChild(opt2);

var opt3=document.createElement('option');
opt3.value='2';
opt3.innerHTML='sala ejecutico';
seleccionar.appendChild(opt3);

//agregando imagen//
var imgd = document.createElement('img');
imgd.id= 'locall';
imgd.className= 'imgs';
imgd.src= '../imagenes/espacios/espacio1.jpg';
document.getElementById("principio").appendChild(imgd);

//calendario de disponobilida//

var calendario = document.createElement('div');
calendario.id='callens';
calendario.innerHTML='DIAS DISPONIBLES      ';
primercaja.appendChild(calendario);

//creando la segunda seccion//
var sec2 = document.createElement('div');
sec2.className= 'seccion2';

document.getElementById("principal").appendChild(sec2);
var titu3= document.createElement('h1');
titu3.innerHTML='Extras';
sec2.appendChild(titu3);
var form2= document.createElement('form');
form2.className = 'stocc';
sec2.appendChild(form2);


//checbock
var divv11= document.createElement('div');
divv11.className ='eligirr';
form2.appendChild(divv11);

var inmput = document.createElement('input');
inmput.type='checkbox';
divv11.appendChild(inmput);
var eti1= document.createElement('label');
eti1.innerHTML='Horas Extra- Desde 60.50 S/';
divv11.appendChild(eti1);

var inmput1 = document.createElement('input');
inmput1.type='checkbox';
divv11.appendChild(inmput1);
var eti2= document.createElement('label');
eti2.innerHTML='Decoracion basica - Desde 60.50 S/';
divv11.appendChild(eti2);

var inmput3 = document.createElement('input');
inmput3.type='checkbox';
divv11.appendChild(inmput3);
var eti3= document.createElement('label');
eti3.innerHTML='Payasos - Desde 60.50 S/';
divv11.appendChild(eti3);

var divv12= document.createElement('div');
divv12.className ='eligirr';
form2.appendChild(divv12);


var inmput4 = document.createElement('input');
inmput4.type='checkbox';
divv12.appendChild(inmput4);
var eti4= document.createElement('label');
eti4.innerHTML='limpieza de salas-Desde 30.00 S/';
divv12.appendChild(eti4);

var inmput5 = document.createElement('input');
inmput5.type='checkbox';
divv12.appendChild(inmput5);
var eti5= document.createElement('label');
eti5.innerHTML='Decoracion de mesas  - Desde 180.50 S/';
divv12.appendChild(eti5);

var inmput6 = document.createElement('input');
inmput6.type='checkbox';
divv12.appendChild(inmput6);
var eti6= document.createElement('label');
eti6.innerHTML='Camarero profesional - Desde 60.50 S/';
divv12.appendChild(eti6);

var divv13= document.createElement('div');
divv13.className ='eligirr';
form2.appendChild(divv13);


var inmput7 = document.createElement('input');
inmput7.type='checkbox';
divv13.appendChild(inmput7);
var eti7= document.createElement('label');
eti7.innerHTML='Almacenaje- Desde 60.50 S/';
divv13.appendChild(eti7);

var inmput8 = document.createElement('input');
inmput8.type='checkbox';
divv13.appendChild(inmput8);
var eti8= document.createElement('label');
eti8.innerHTML='Castillo inchable - Desde 230.50 S/';
divv13.appendChild(eti8);

var inmput9 = document.createElement('input');
inmput9.type='checkbox';
divv13.appendChild(inmput9);
var eti9= document.createElement('label');
eti9.innerHTML='Monitor - Desde 60.50 S/';
divv13.appendChild(eti9);




//seccion3
var secc3 = document.createElement('div');
secc3.id= 'ultimo';
secc3.className = 'formulario';
document.getElementById("principal").appendChild(secc3);


var reg = document.createElement('form');
reg.id= 'regisda';
reg.className='regriss';
secc3.appendChild(reg );


var labell1= document.createElement('label');
labell1.className= 'fomrtt';
labell1.innerHTML='Nombres';
reg.appendChild(labell1);
var imputt1 = document.createElement('input');
imputt1.id='nombress';
imputt1.className= 'txtnombre';
imputt1.Placeholder= 'ingrese su nombre';
reg.appendChild(imputt1);


var labell2= document.createElement('label');
labell2.className= 'fomrtt';
labell2.innerHTML='Apellidos';
reg.appendChild(labell2);
var imputt2 = document.createElement('input');
imputt2.id= 'appellidos';
imputt2.className= 'txtapellidos';
imputt2.Placeholder= 'ingrese su nombre';
reg.appendChild(imputt2);



var labell3= document.createElement('label');
labell3.className= 'fomrtt';
labell3.innerHTML='Telefono';
reg.appendChild(labell3);

var imputt3 = document.createElement('input');
imputt3.id = 'tefonoss';
imputt3.className= 'txtfono';
imputt3.Placeholder= 'ingrese su nombre';
reg.appendChild(imputt3);


var labell4= document.createElement('label');
labell4.className= 'fomrtt';
labell4.innerHTML='correo';
reg.appendChild(labell4);

var imputt4 = document.createElement('input');
imputt4.id='correoss';
imputt4.className= 'txtcorreo';
imputt4.Placeholder= 'ingrese su correo';
reg.appendChild(imputt4);


var labell44= document.createElement('label');
labell44.className= 'fomrtt';
labell44.innerHTML='fecha';
reg.appendChild(labell44);

var imputt44 = document.createElement('input');
imputt44.id= 'fechaa';
imputt44.type= 'date';
imputt44.className= 'txtfecha';
imputt44.Placeholder= 'ingrese su correo';
reg.appendChild(imputt44);


var labell5= document.createElement('label');
labell5.className= 'fomrtt';
labell5.innerHTML='¿como nos conociste?';
reg.appendChild(labell5);

var imputt5 = document.createElement('textarea');
imputt5.id ='conociste';
imputt5.className= 'txtconociste';
imputt5.Placeholder= 'ingrese su correo';
reg.appendChild(imputt5);

var labell6= document.createElement('label');
labell6.className= 'fomrtt';
labell6.innerHTML='¿comentenos sobre su evento?';
reg.appendChild(labell6);

var imputt6 = document.createElement('textarea');
imputt6.id='comentenos';

imputt6.className= 'txtcomentenos';
imputt6.Placeholder= 'ingrese su correo';
reg.appendChild(imputt6);

var botomm= document.createElement('button');
botomm.id='enviarrr';
botomm.innerHTML='Enviar';
botomm.type='submit';
reg.appendChild(botomm);

var botomm2= document.createElement('button');
botomm2.id='enviarrr';
botomm2.innerHTML='Limpiar';
botomm2.type='reset';
reg.appendChild(botomm2);

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



