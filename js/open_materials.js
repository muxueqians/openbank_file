window.onload=function(){
    setInterval('countDown()',1000);
    var  affirm=document.getElementById("affirm");
    var isok=true;
    affirm.onclick=function(){
        if(isok){
            window.location.href="open_information.html";
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
        window.location.href="index.html";
    }
}
function ret(){
    window.location.href="index.html";
}
