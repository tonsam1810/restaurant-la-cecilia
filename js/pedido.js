
class classproductos{
    
    constructor(ide,grupo, nombre, descripcion,imagen, precio, cantidad ){
        this.ide=ide;
        this.grupo=grupo;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagen="../imagenes/carta/"+imagen;
        this.precio=precio;
        this.cantidad= 0;
    }

    
}

class pedidoCliente{
    constructor(nombre, cantidad, precio){
        
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

var pedidogenerado = new Array(); 



//Grupo productos
var grupoproductos = new Array("Muebles de tv","Muebles de dormitorio","muebles de oficina");

//Creacion de objeto producto
//para agregar un platp se debe crear uno con id(unico), grupoplatos(un elemento),nombre, descrip,imagen, precio, y cantidad por defecto 0; 
var CECelina = new classproductos("CECelina","Centros de Entretenimiento","Centro de Centretenimiento Celina","Disfruta cómodamente viendo tus películas, series o deportes favoritos con el Centro de Entretenimiento Celina.","chicharronmedio.jpg",500.00 );
var CERio = new classproductos("CERio","Centros de Entretenimiento","Centro de Entretenimiento Rio","Mueble práctico y moderno para tener todos los aparatos eléctricos en un mismo lugar y ahorrar espacio dentro de cualquier ambiente. Fabricado con sólidos materiales, es la solución perfecta para divertirte con la familia y amigos.","chicharronentero.jpg",48.90 );
var CELasVegas = new classproductos("CELasVegas","Centros de Entretenimiento","Centro de Entretenimiento Las Vegas","Mueble ideal para la Sala TV, cuenta con nichos para varios electrodomésticos como TV, radio, DVD y otros,","chicharronmedio.jpg",22.90);
var MTVVersalles = new classproductos("MTVVersalles","Centros de Entretenimiento","Mesa de TV Versalles","Módulo TV con estructura de MDP con acabado mate Puertas con sistema de cierre retardado.","chicharronmedio.jpg",22.90 );

var habas = new classproductos("habas", "Piqueos", "porcion de habas", "exquisita porcion de habas", "habas.png", 8.90 );

var lomosaltado = new classproductos("lomosaltado", "Almuerzos", "Lomo saltado", "aqui la descripcion del plato", "lomosaltado.jpg", 28.90);
var costillar = new classproductos("costillar", "Almuerzos", "Costillar", "aqui la descripcion del plato", "costillar.jpg", 39.90);

var soltero = new classproductos("soltero", "Entradas", "Soltero de queso", "queso picado con etc, etc ...", "soltero.jpg", 10.00 );
var tequeños = new classproductos("tequeños", "Entradas", "Tequeños", "exquisitos tequeños, acompañados de una guarnicion", "tequeños.jpg", 10.00 );

var litrodejugo = new classproductos("litrodejugo","Postres y bebidas sin alcohol","Jarra de jugo de fruta","descripcion del jugo o de la bebida", "litrodejugo.png", 15.00);

var vino = new classproductos("vino","Bebidas con alcohol","Vino Marca X","15 años añejado, frutos x", "vino.jpg", 48.00);

//Lista de objetos plato
var productos = new Array();

//Adicion de platos
productos.push(CECelina);
productos.push(CERio);
productos.push(CELasVegas);
productos.push(MTVVersalles);
productos.push(habas);
productos.push(lomosaltado);
productos.push(soltero);
productos.push(tequeños);
productos.push(costillar);
productos.push(litrodejugo);
productos.push(vino);



//creacion dinamica de menu
grupoproductos.forEach(el => {
    var divi = document.createElement("div");
    divi.id = el;

    var divtitu = document.createElement("div");
    divtitu.className="ctitulo";

    var titu = document.createElement("h3");
    titu.innerHTML=el;
    
    document.getElementById("articulo").appendChild(divi);
    divi.appendChild(divtitu);
    divtitu.appendChild(titu);
    
});

//ahora recorremos el array platos agregando dicho plato al div que corresponda
productos.forEach(e => {
    var secc = document.createElement("section")
    secc.id=e.ide;
    var figu = document.createElement("figure");
    var imag = document.createElement("img");
    imag.src = e.imagen;
    var capt = document.createElement("figcaption");
    capt.innerHTML=e.nombre;
    var desc = document.createElement("p");
    desc.innerHTML=e.descripcion;
    var prec = document.createElement("h4");
    prec.innerHTML= "S/.  "+e.precio;


    var btnmenos = document.createElement("input");
    btnmenos.type="button";
    btnmenos.value="-";
    btnmenos.id=e.ide+"-";
    btnmenos.onclick= function(){
        disminuir(this, e);
    }

    var cantidad = document.createElement("input");
    cantidad.type='text';
    cantidad.value=0;
    cantidad.id=e.ide+"cant";
    

    var btnmas = document.createElement("input");
    btnmas.type="button";
    btnmas.value="+";
    btnmas.id=e.ide+"+";
    btnmas.onclick = function(){
        incrementar(this, e);
    }
    
    
    

    grupoproductos.forEach(x =>{
        if(x=e.grupo){
            document.getElementById(e.grupo).appendChild(secc);
            secc.appendChild(figu);
            figu.appendChild(imag);
            figu.appendChild(capt);
            secc.appendChild(desc);
            secc.appendChild(prec);

            secc.appendChild(btnmenos);
            secc.appendChild(cantidad);
            secc.appendChild(btnmas);
        }
    });


    
    
});

function incrementar(btn, e){
      let id = btn.id;
      let idtextoa = id.replace("+","");
      let idtexto = idtextoa+"cant";
      let texto = document.getElementById(idtexto);
      texto.value++;
      e.cantidad++;

}

function disminuir(btn, e){
      let id = btn.id;
      let idtextoa = id.replace("-","");
      let idtexto = idtextoa+"cant";
      let texto = document.getElementById(idtexto);
      
      if (texto.value > 0){
            texto.value--;
            e.cantidad--;
      }

}


var win;
function generarPedido(){
     for (let i = 0;i<productos.length;i++){
        if(productos[i].cantidad>0){
            let a = new pedidoCliente(productos[i].nombre, productos[i].cantidad, productos[i].precio);
            pedidogenerado.push(a);
        }
    }
    //window.event.preventDefault();

    if (pedidogenerado.length>0){
        sessionStorage.setItem("pedidog", JSON.stringify(pedidogenerado));
        ObtenerArreglo();
        win = window.open('../paginas/supedido.html', '_blank','dialog=yes,minimizable=no');
        win.name = "ventana2";
        
        if (win) {
            win.focus();
            listarPedido();
        } else {
        alert('Please allow popups for this website');    
        }
    }else{
        alert("Agregue uno o mas platos");
    }
    
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var miArreglo;
function ObtenerArreglo(){

    miArreglo = JSON.parse(sessionStorage.getItem("pedidog"));
    return miArreglo;
}

function listarPedido(boton){
    var a=ObtenerArreglo();

    var tabla = document.getElementById("tabla");
    var sumatoria =0;
    for (let i = 0; i < a.length; i++){
        let fila = document.createElement("tr");
        let nom = document.createElement("td");
        nom.innerHTML=a[i].nombre;
        fila.appendChild(nom);
        let ca = document.createElement("td");
        ca.innerHTML=a[i].cantidad;
        fila.appendChild(ca);
        let pre = document.createElement("td");
        pre.innerHTML=a[i].precio;
        fila.appendChild(pre);
        let pt = document.createElement("td");
        sumatoria=sumatoria + ((a[i].cantidad)*(a[i].precio));
        pt.innerHTML= (a[i].cantidad)*(a[i].precio);
        fila.appendChild(pt);
        tabla.appendChild(fila);
    }
    let fila = document.createElement("tr");
    let nom = document.createElement("td");
    nom.innerHTML="";
    fila.appendChild(nom);
    let ca = document.createElement("td");
    ca.innerHTML="";
    fila.appendChild(ca);
    let pre = document.createElement("td");
    pre.innerHTML="Total a Pagar";
    fila.appendChild(pre);
    let pt = document.createElement("td");
    let tp = document.createElement("input");
    tp.type="text";
    tp.value=sumatoria;
    tp.readOnly=true;
    pt.appendChild(tp);
    fila.appendChild(pt);
    tabla.appendChild(fila);

boton.disabled=true;

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

function cambiarColorNav(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("color").style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
    setTimeout("cambiarColorNav()",1000);
}
cambiarColorNav();

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




