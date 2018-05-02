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
            $("#licensesPictureX").attr("src",data.blImgPath);
            $("#relIdX").attr("src",data.lpImgPath);
            $("#autPerX").attr("src",data.coaImgPath);
            $("#agentIdX").attr("src",data.agentImgPath);
            // $(".licensesPicture").css("background","url(" + data.blImgPath + ")");
            // $(".cardPicture").css("background","url(" + data.blImgPath + ")")
        }
    });
    var affirm=document.getElementById('affirm');
    var isOK=true;
    var id=getURL("type");
    var comCode=getURL("comCode");
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
var id=getURL("type");
var comCode=getURL("comCode");
function ret(){
    window.location.href="scanAgentCard_succeed.html?type="+id+"&comCode="+comCode;
}