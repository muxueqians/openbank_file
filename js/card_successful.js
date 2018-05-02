window.onload=function(){

    setInterval('countDown()',1000);
    var affirm=document.getElementById('affirm');
    console.log(affirm);
    var isOK=true;
    affirm.onclick=function(){
        // var id=getURL("type");
        var comCode=getURL("comCode");
        console.log(comCode);
        if(isOK){
            window.location.href="open_account.html?comCode="+comCode;
            isOK=false;
        }

    };

};
var sec=180;
function countDown(){
    if(sec>0){
        document.getElementById("timesd").innerHTML=sec--;
    }else{
        alert("操作超时，即将返回首页");
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
// var id=getURL("type");
function ret(){
    window.location.href="insert_card.html?comCode="+comCode;
}