window.onload=function(){

    // var id=getURL("type");
    $.ajax({
        url:"/p-account/getImgBase64Info.mvc",
        type:"post",
        dataType:"json",
        data:{
            "comCode":comCode
        },
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(data){
            $(".main_picture").css("background","url(" + data.lpImgPath + ")")
        }
    });
    setInterval('countDown()',1000);
    var affirm=document.getElementById('affirm');
    console.log(affirm);
    var isok=true;
    affirm.onclick=function(){
        var comCode=getURL("comCode");
        var id=getURL("type");
        console.log(comCode);
        if(isok){
            window.location.href="certificates_match_new.html?type="+id+"&comCode="+comCode;
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
    window.location.href="inserts_card.html?type="+id+"&comCode="+comCode;
}