window.onload=function(){
    setInterval('countDown()',1000);

    // var bx=document.getElementsByClassName('main_picture')[0];
    var bx=$(".main_picture");
    // var bx=$('main_picture');
    var bxHeight=bx.offsetHeight;
    console.log(bxHeight);
    bx.innerHTML="<span><span>";
    // var bs=bx.getElementsByTagName('span')[0];
    var bs=$(".main_picture").find("span");
    bs.className="main_bs";
    var num=0;
    var isOk=true;
    var stop=setInterval(function(){
        if(isOk){
            num+=2;
            if(num>=bxHeight-10){
                num=bxHeight;
                isOk=false;
            }
        }else{
            num-=2;
            if(num<0){
                num=10;
                isOk=true;
            }
        }
        $(".main_picture").find("span").css("margin-top",num+'px');
        // bs.style.marginTop=num+'px';
    },50);
    // $('.main_picture').click(function(){
    $(".main_picture").bind('click',function() {
        $.ajax({
            type:"post",
            url:"/p-account/checkQRCode.mvc",
            dataType:"json",
            data:{"companyName":"paradigm","regAddress":"上地东路","telephone":"18524817052","lawPersion":"万洋","identityCard":"142225186451854321"},
            success:function(data){
                console.log(data);
                if(data.result=="0"){
                    window.location.href="insert_card.html?comCode=" + data.comCode;
                }else{
                    alert("请使用合法营业执照扫描");
                    window.location.href="scanning_license.html";
                }
            }
        });
        $(this).unbind("click");
    })
};
var sec=180;
function countDown(){
    if(sec>0){
        document.getElementById("timesd").innerHTML=sec--;

    }else{

        alert("操作超时，即将返回首页");
        window.location.href="index.html";
    }
}
function ret(){
    window.location.href="open_information.html";
}


