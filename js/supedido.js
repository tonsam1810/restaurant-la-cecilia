


var tipomesa = document.getElementById("mesa");
var tipodelivery = document.getElementById("delivery");



tipomesa.onfocus=function(){
    document.getElementById("calle").value="";
    document.getElementById("calle").disabled=true;
    document.getElementById("numerodir").value="";
    document.getElementById("numerodir").disabled=true;
    document.getElementById("distrito").value="";
    document.getElementById("distrito").disabled=true;

    document.getElementById("nmesa").disabled=false;



}
tipodelivery.onfocus=function(){
    document.getElementById("nmesa").disabled=true;
    document.getElementById("nmesa").value="";

    document.getElementById("calle").disabled=false;
    document.getElementById("numerodir").disabled=false;
    document.getElementById("distrito").disabled=false;


    
}

function crearmesas(x){
    var mesas = document.getElementById("nmesa");
    for (let i = 0; i<x ; i++){
        let op = document.createElement("option");
        op.value=i+1;
        op.innerHTML=i+1+"";
        mesas.appendChild(op);
    }
}

crearmesas(10);


document.querySelector('input[name="nombrecl"]').addEventListener("keypress",function(event){
    var longitud
    =document.querySelector('input[name="nombrecl"]').value.length;
    if(longitud>=25){
        window.event.preventDefault();
        return;
    }
    
});

document.querySelector('input[name="apellcl"]').addEventListener("keypress",function(event){
    var longitud
    =document.querySelector('input[name="apellcl"]').value.length;
    if(longitud>=30){
        window.event.preventDefault();
        return;
    }
    
});

function irapagar(frm){
    let patroncel = /^\d{9}$/;
    let patroncorreo = /^\w+[_]*\w*[@]{1}\w+[.]{1}\w[.]*\w*$/;
    let patronn = /^[A-Z]*[a-z]+\s*[A-Z]*[a-z]*\s*[A-Z]*[a-z]*$/;



    if(!patronn.test(frm.nombrecl.value)){
        window.event.preventDefault();
        alert("Nombre invalido");
        return;
    }
    if(!patronn.test(frm.apellcl.value)){
        window.event.preventDefault();
        alert("Apellido invalido");
        return;
    }

    if(!patroncel.test(frm.telefcl.value)){
        window.event.preventDefault();
        alert("Telefono invalido");
        return;
    }


    window.close();
    var win = window.open('../paginas/visa.html', '_blank','dialog=yes,minimizable=no');

alert("Su pedido se registro satisfactoriamente");
}