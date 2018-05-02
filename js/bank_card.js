window.onload=function(){
    setInterval('countDown()',1000);
    // var pic=document.getElementsByClassName("main_picture")[0];
    var pic=$(".main_picture").get(0);
    var isok=true;
    pic.onclick=function () {
        if(isok){
            window.location.href="openbank_succeed.html";
            isok=false;
        }

    }

};
var sec=29;
function countDown(){
    if(sec>0){
        document.getElementById("timesd").innerHTML=sec--;
    }else{
        // alert("操作超时，即将返回首页");
        window.location.href='index.html';
    }
}
function getURL(name){
    var reg=new RegExp("(^|&)"+name+"=([^&]*(&|$))","i");
    var r=window.location.search.substr(1).match(reg);
    if(r!=null){
        // return unescape(r[2]);
        return unescape(r[2].replace('&',''));
    }
    return null;
}
