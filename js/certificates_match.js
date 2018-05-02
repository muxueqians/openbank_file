window.onload=function(){
    setInterval('countDown()',1000);
    var comCode=getURL("comCode");
    $.ajax({
        url:"/p-account/getImgBase64Info.mvc",
        type:"post",
        dataType:"json",
        data:{
            "comCode":comCode
        },
        success:function(data){
            console.log(data);
            $("#licensesPicture").attr("src",data.blImgPath);
            $("#cardPicture").attr("src",data.lpImgPath);
            // $(".licensesPicture").css("background","url(" + data.blImgPath + ")");
            // $(".cardPicture").css("background","url(" + data.blImgPath + ")")
        }
    });
    var affirm=document.getElementById('affirm');
    var id=getURL("type");
    var comCode=getURL("comCode");
    var isOK=true;
    affirm.onclick=function () {
        if(isOK){
            window.location.href='managerAuthorization.html?type='+id+'&comCode='+comCode;
            isOK=false;
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
function getURL(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*(&|$))", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        // return unescape(r[2]);
        return unescape(r[2].replace('&',''));
    }
    return null;
}
var comCode=getURL("comCode");
var id=getURL("type");
function ret(){
    window.location.href="cardScan_succeed.html?type="+id+"&comCode="+comCode;
}