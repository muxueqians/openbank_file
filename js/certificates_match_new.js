window.onload=function(){
    // setInterval('countDown()',1000);
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
        }
    });
    // var main_fsr=document.getElementsByClassName("main_fsr")[0];
    var main_fsr=$(".main_fsr").get(0);
    var id=getURL("type");
    var comCode=getURL("comCode");
    var isOK=true;
    main_fsr.onclick=function () {
        if(isOK){
            window.location.href='password_page.html?type='+id+'&comCode='+comCode;
            isOK=false;
        }

    }
};

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
    window.location.href="cardScans_succeed.html?type="+id+"&comCode="+comCode;
}