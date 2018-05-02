window.onload=function(){
    setInterval('countDown()',1000);
    var  affirm=document.getElementById("affirm");
    var isok=true;
    affirm.onclick=function(){
        if(isok){
            window.location.href="scanning_license.html";
            isok=false;
        }

    };
};

var sec=180;
function countDown(){
    if(sec>0){
        document.getElementById("timesd").innerHTML=sec--;

    }else{
        alert("操作超时，即将返回首页");
        window.location.href="open_materials.html";
    }
}
function ret(){
    window.location.href="open_materials.html";
}
