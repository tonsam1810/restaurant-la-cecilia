var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
"Agosto","Setiembre","Octubre","Noviembre","Diciembre");
var dsemanas = new Array("Dom","Lun","Mar","Mie","Jue","Vie","Sab");
function generarCalendario(){
    var f = new Date();
    var dia = f.getDate();//25
    var mes = meses[f.getMonth()]; 
    var year = f.getFullYear();//2021
    var ndias = (new Date(year,f.getMonth()+1,0).getDate());//31 
    var dsemana = (new Date(year,f.getMonth(),1).getDay());//5

    var dias = new Array();

    for(let i=0;i<dsemana;i++){
        dias.push("");
    }

    for(let i=1;i<=ndias;i++){
        dias.push(i);
    }

    var tabla = document.createElement("table");
    tabla.className='tablas';
    tabla.setAttribute("border",2);
    document.getElementById("callens").appendChild(tabla);


    var fila1 = document.createElement("th");
    fila1.className='menucalen';
    fila1.colSpan = 7;
    fila1.innerHTML= mes +" "+ "de"+ " " + year;
    tabla.appendChild(fila1);
    var divcalen = document.createElement('div');
    fila1.appendChild(divcalen);
    var btmIZ = document.createElement('button')
    btmIZ.innerHTML= '«';
    divcalen.appendChild(btmIZ );

    var btm = document.createElement('button');
    btm.innerHTML='»';
    divcalen.appendChild(btm);
    
    var fila = document.createElement("tr");
    tabla.appendChild(fila);



    dsemanas.forEach(function(d){
        let celda = document.createElement("th");
        celda.innerHTML = d;
        fila.appendChild(celda);
    });



 

    let i=0;     //agregar los dias a la tabla:
    dias.forEach(function(d){
        if(i%7==0){

           fila = document.createElement("tr");
           tabla.appendChild(fila);
        }

        i++;

        let celda = document.createElement("td");
        celda.className= 'diasreco';
        celda.innerHTML = d;
        fila.appendChild(celda);        
    });
}

generarCalendario();


var imagenes = new Array ("../imagenes/espacios/espacio1.jpg","../imagenes/espacios/espacio2.jpg","../imagenes/espacios/espacio3.jpg");
var a =0;
function carrusel(){
    a++;
    if (a>=5){   a=0;}
    document.getElementById("baner").setAttribute("src", imagenes[a] );
    setTimeout("carrusel()",1000);
}




///evento 01
document.getElementById("tipolocal").addEventListener("change", myFunction);
function myFunction() {
    var bn = document.getElementById("tipolocal").value;
    document.getElementById("locall").setAttribute("src", imagenes[bn] );
  }

//marcar el calen
  var ocupado =[];
   function CalendarioCapturar(vv){
    let CalendarioCa=document.getElementById("fechaa").value;
    let ledfecha0 = CalendarioCa.substr(9,1);
    let ledfecha = CalendarioCa.substr(8,2);
    var capdias= document.querySelectorAll('.diasreco');
    capdias.forEach(e =>{ 
        var mmb=e.textContent;
        if(mmb.length==1){
            mmb="0"+mmb;
        }
        
       if((ledfecha.length==2) &&(mmb==ledfecha)
       ){
           
           e.style.background = "red";

       }
    });

   }
   
   
   //document.getElementById("enviarrr").addEventListener("submit", CalendarioCapturar);
   document.getElementById("botonnn").addEventListener("click", resivido);
   
   
   
function resivido(){
 alert('datos resividos');
 //capturar los datos pendiente 

}
 

//------------------------------------





document.querySelector('#nombress').addEventListener("keypress",function(event){

    var longitud = document.querySelector('#nombress').value.length;

    if(longitud >= 25){
        window.event.preventDefault();
        return;
    }
    var ascii = event.keyCode;

    if(ascii<65 || (ascii>90 &&  ascii<97 )||ascii>122){
        window.event.preventDefault();//
        return;
    }
});

document.querySelector('#appellidos').addEventListener("keypress",function(event){

    var longitud = document.querySelector('#appellidos').value.length;

    if(longitud >= 25){
        window.event.preventDefault();
        return;
    }
    var ascii = event.keyCode;

    if(ascii<65 || (ascii>90 &&  ascii<97 )||ascii>122){
        window.event.preventDefault();//
        return;
    }
});


document.querySelector('#tefonoss').addEventListener("keypress",function(event){
    var longitud = document.querySelector('#tefonoss').value.length;

    if(longitud >= 9){
        window.event.preventDefault();
        return;
    }

    var ascii = event.keyCode;
    if(ascii<48 || ascii >57){
     window.event.preventDefault();
        return;
    }
});







document.getElementById("regisda").addEventListener("submit", nouevos);
function nouevos(){




    let patron = /^\s*$/;

    var frm = document.querySelector('#regisda');
    var frmnom = document.querySelector('#nombress').value;
    var frmape = document.querySelector('#appellidos').value;
    var frmtel = document.querySelector('#tefonoss').value;
    var frmcorr = document.querySelector('#correoss').value;
    if(patron.test(frmnom)){
        window.event.preventDefault();
        alert('Ingrese el nombre');
        return;
    }
    if(patron.test(frmape)){
        window.event.preventDefault();
        alert('Ingrese el Apellido');
        return;
    }


    patron = /^[9][0-9]{8}$/;

    if(!patron.test(frmtel)){

        window.event.preventDefault();

        alert('Telefono incorrecto');

        return;

    }


        //Aguila45_199@gmail.edu.pe
    patron = /^([a-zA-Z0-9])*([_])*([0-9])*[@]([a-z])+[.][a-z]{2,3}[.]*([a-z]{2,3})*$/;

    if(!patron.test(frmcorr)){

        window.event.preventDefault();

        alert('Formato de email incorrecto');

        return;

    }


    alert('datos enviados');
    window.event.preventDefault();

    CalendarioCapturar();
}