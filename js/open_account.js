window.onload=function(){

    console.log(comCode);
    $.ajax({
        url:"/p-account/getByComCode.mvc",
        type:"post",
        data:{"comCode":comCode},
        async:true,
        dataType:"json",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success:function(data){
            console.log(data);
            $("#companyName").val(data.companyName);
            $("#registerAd").val(data.regAddress);
            $("#contactPhone").val(data.telephone);
            $("#realName").val(data.lawPersion);
            $("#cardNo").val(data.identityCard)
        }

    });

    setInterval('countDown()',1000);
    $("#affirm").bind('click',function(){
            if( check()){
                var comCode=getURL("comCode");
                var checkType=$("input[name='Rad']:checked").val();
                var rems=$("input[name='Radm']:checked").val();
                var remr=$("input[name='Radme']:checked").val();
                var rades=$("input[name='Rade']:checked").val();
                var person=$("#checkPerson").val();
                var phone=$("#checkPhone").val();
                var email=$("#checkEmail").val();
                var tranper=$("input[name='Radf']:checked").val();
                var openMethods=$("input[name='Radek']:checked").val();
                // $(function(){
                //     $("#signature").jSignature();
                // });
                // $("#signature").mouseover(function(){
                //     var $sigdiv = $("#signature");
                //     var datapair = $sigdiv.jSignature("getData", "image"); //设置输出的格式，具体可以参考官方文档
                //     var imagebase64 = datapair[1].replace(/\+/g, '%2B');
                //     // retrun imagebase64;
                // });
                // $("#signature").mouseout(function(){
                //     var $sigdiv = $("#signature");
                //     var datapair = $sigdiv.jSignature("getData", "image"); //设置输出的格式，具体可以参考官方文档
                //     var i = new Image();
                //     i.src = "data:" + datapair[0] + "," + datapair[1]
                //     $(i).appendTo($("#image")) // append the image (SVG) to DOM.
                // })
                $.ajax({
                    url:"/p-account/addBalance.mvc",
                    type:"post",
                    data:{
                        "comCode":comCode,
                        "balanceType":checkType,
                        "deliveryType":rems,
                        "balanceRate":remr,
                        "balancePersion":person,
                        "balancePhone":phone,
                        "mail":email,
                        "currentPersion":rades,
                        "sealType":tranper,
                        "licenceType":openMethods,
                        // "inkImgPath":imagebase64
                    },
                    async:true,
                    dataType:"json",
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    success:function(data){
                        if(data.result=="0"){
                            if(rades=="0"){
                                // 法人办理
                                window.location.href='scanning_licenses.html?type=0&comCode='+comCode;
                            }else{
                                //  代办人办理
                                window.location.href='scanning_licenses.html?type=1&comCode='+comCode;
                            }
                        }
                    }
                });

            }else{
                return;
            }
        $(this).unbind("click");
    })

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
function check(){
    if($("#companyName").val()=="" ){
        alert("数据不完整");
        return false;
    }
    if($("#registerAd").val()==""){
        alert("数据不完整");
        return false;
    }
    if($("#contactPhone").val()==""){
        alert("数据不完整");
        return false;
    }
    if($("#realName").val()==""){
        alert("数据不完整");
        return false;
    }
    if($("#cardNo").val()==""){
        alert("数据不完整");
        return false;
    }
    if($('#checkPerson').val()==""){
        alert("请填写对账联系人");
        return false;
    }
    // var pattern = /^1[34578]\d{9}$/;
    var phone=/^[1][3,4,5,7,8,9][0-9]{9}$/;
    if(!phone.test($("#checkPhone").val())){
        alert("请填写正确的手机号");
        return false;
    }
    var email=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if(!email.test($('#checkEmail').val())){
        alert("请填写正确的邮箱地址");
        return false;
    }
    return true;
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
function ret() {
    window.location.href="card_successful.html?comCode="+comCode;
}

