window.onload=function(){
    setInterval('countDown()',1000);

    var id=getURL("type");
    var comCode=getURL("comCode");
    var mps=document.getElementsByClassName('main_picture')[0];
    var isok=true;
    mps.onclick=function () {
      if(isok) {
          $.ajax({
              url: "/p-account/checkLaw.mvc",
              type: "post",
              dataType: "json",
              success: function (data) {
                  console.log(data);
                  if (data.result == "0") {
                      window.location.href = "password_page.html?type=" + id + "&comCode=" + comCode;
                  } else {
                      alert("请等待大堂经理授权")
                  }
              }
          });
          isok=false;
      }
    }
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
var id=getURL("type");
var comCode=getURL("comCode");
function ret(){
    window.location.href="card_match.html?type="+id+"&comCode="+comCode;
}
