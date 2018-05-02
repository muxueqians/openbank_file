window.onload=function(){

    setInterval('countDown()',1000);
    $("#affirm").bind('click',function(){
        var id=getURL("type");
        var comCode=getURL("comCode");
        $.ajax({
            type:"post",
            url:"/p-account/checkIDCard.mvc",
            dataType:"json",
            // 142225186451854321
            // 14222598965432123x
            data:{identityCard:"142225186451854321"},
            success:function(data){
                if(data.result=="0"){
                    window.location.href="card_successful.html?comCode="+comCode;
                }else{
                    window.location.href="card_error.html?comCode="+comCode;
                }
            }
        });
        $(this).unbind("click");
    });

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
// var id=getURL("type");
var comCode=getURL("comCode");
function ret(){
    window.location.href="scanning_license.html?comCode="+comCode;
}