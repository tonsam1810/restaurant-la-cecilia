function girar(e){
    e.style.transform = "rotateZ(360deg)";
    e.style.transition = "all 1s";
}

function retornar(e){
    e.style.transform = "rotateZ(0deg)";
    e.style.transition = "all 1s";
}

for(var i=0;i<document.getElementsByClassName("imgdiv").length;i++){
    document.getElementsByClassName("imgdiv")[i].setAttribute("onmouseover" , "girar(this)");
    document.getElementsByClassName("imgdiv")[i].setAttribute("onmouseout" , "retornar(this)");
}

/*-----------------------------------------------------------------------------------*/
var i=1;
var ban = new Array("banner0","banner1");//Lista de imagenes jpg
function cambiarBanner(){
        document.getElementById("banner").setAttribute("src",`../imagenes/banners/${ban[i]}.jpg`);
        i++;
        if(i==ban.length)
        i=0;
}
setInterval("cambiarBanner()",2000); 

function cambiarColorNav(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    document.getElementById("color").style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
    setTimeout("cambiarColorNav()",1000);
}
cambiarColorNav();
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



