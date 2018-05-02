window.onload=function(){
  setInterval('countDown()',1000);
};
var sec=180;
function countDown(url){
    if(sec>0){
        document.getElementById("timesed").innerHTML=sec--;
    }else{
        alert("操作超时，即将返回首页");
        window.location.href=url;
    }
}
