window.onload=function(){
    $(".main_picture").bind('click',function(){
        $.ajax({
            type:"post",
            url:"/p-account/checkQRCode.mvc",
            dataType:"json",
            data:{id:"123"},
            success:function(data){
                console.log(type(data));
                if(data==0){
                    window.location.href="certificates_match.html";
                }else{

                    window.location.href="cardScan_error.html";
                }
            }
        });
        $(this).unbind("click");
    })
};