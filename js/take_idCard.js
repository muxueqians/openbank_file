window.onload=function(){
    setInterval('countDown()',1000);
    var affirm=document.getElementById('affirm');
    // affirm.onclick=function () {
    //     window.location.href='insert_card.html';
    // }
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