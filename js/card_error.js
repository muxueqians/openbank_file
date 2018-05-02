window.onload=function(){
    var id=getURL("type");
    setInterval('countDown()',1000);
    var affirm=document.getElementById('affirm');
    var isOK=true;
    affirm.onclick=function () {
        if(isOK){
            window.location.href="insert_card.html?type="+id+"&comCode="+comCode;
            isOK=false;
        }

    }
};
var sec=180;
function countDown(){
    if(sec>0){
        document.getElementById("timesd").innerHTML=sec--;
    }else{
        alert("操作超时，即将返回上首页");
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
var comCode=getURL("comCode");
var id=getURL("type");
function ret(){
    window.location.href="insert_card.html?type="+id+"&comCode="+comCode;
}