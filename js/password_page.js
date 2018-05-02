window.onload=function(){

    setInterval('countDown()',1000);
    var affirm=document.getElementById('affirm');
    var inp=document.getElementById('password');
    var ins=document.getElementById('rpPassword');
    affirm.onclick=function () {
        var regf= /^[0-9]{6}$/;
        if(ins.value!=="" && regf.test(inp.value) && regf.test(ins.value) && inp.value == ins.value){
            window.location.href='bank_card.html';

        }else if(inp.value=="" && ins.value==""){
            // alert("请按提示正确设置密码");
            alert("密码不能为空");
        }else if(inp.value != ins.value){
            alert("两次密码设置不一致，请设置相同的密码");
        }else{
            alert("密码设置错误，请按提示重新设置密码");
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
// var id=getURL("type");
// var comCode=getURL("comCode");
function ret(){
    var id=getURL("type");
    var comCode=getURL("comCode");
    if(id=="0"){
        window.location.href="certificates_match_new.html?type="+id+"&comCode="+comCode;
    }else{
        window.location.href="card_match_new.html?type="+id+"&comCode="+comCode;
    }

}
